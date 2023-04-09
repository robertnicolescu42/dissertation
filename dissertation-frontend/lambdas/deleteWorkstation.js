const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Parse the plantIndex and workstationIndex values from the request
    const plantIndex = event["pathParameters"]["plantIndex"];
    const stationId = event["pathParameters"]["workstationIndex"];

    // Define the parameters for the DynamoDB delete operation
    const params = {
      TableName: "workstations",
      Key: {
        stationId: stationId,
        // plantIndex: plantIndex,
      },
      ConditionExpression: "attribute_exists(stationId)", // ensure that the item exists before deleting
    };

    // Use the DynamoDB delete operation to remove the item from the table
    await dynamodb.delete(params).promise();

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Workstation ${stationId} for Plant ${plantIndex} deleted successfully`,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    // Handle any errors that occur during the operation
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: error.message,
        event: event.pathParameters,
      }),
    };
  }
};
