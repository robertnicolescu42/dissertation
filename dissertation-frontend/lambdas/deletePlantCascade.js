const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Parse the plantIndex value from the request
    const plantIndex = event["pathParameters"]["plantIndex"];

    // Define the parameters for the DynamoDB delete operation on plants table
    const plantParams = {
      TableName: "plants",
      Key: {
        plantIndex: plantIndex,
      },
      ConditionExpression: "attribute_exists(plantIndex)", // ensure that the item exists before deleting
    };

    // Use the DynamoDB delete operation to remove the plant item from the table
    await dynamodb.delete(plantParams).promise();

    // Define the parameters for the DynamoDB scan operation on workstations table
    const scanParams = {
      TableName: "workstations",
      FilterExpression: "plantIndex = :pIndex",
      ExpressionAttributeValues: {
        ":pIndex": plantIndex,
      },
    };

    // Use the DynamoDB scan operation to get all workstations with plantIndex equal to the provided plantIndex
    const scanResult = await dynamodb.scan(scanParams).promise();

    // Delete every workstation item from the workstations table that has its plantIndex equal to the provided plantIndex
    await Promise.all(
      scanResult.Items.map(async (item) => {
        const deleteParams = {
          TableName: "workstations",
          Key: {
            stationId: item.stationId,
          },
        };
        await dynamodb.delete(deleteParams).promise();
      })
    );

    // Return a success response
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Success",
      }),
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
        event: event.plantIndex,
      }),
    };
  }
};
