const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Parse the plantIndex and workstationIndex values from the request
    const plantIndex = event["pathParameters"]["plantIndex"];
    const stationId = event["pathParameters"]["workstationIndex"];

    // Parse the request body to extract the updated workstation data
    const requestBody = JSON.parse(event.body);
    const {
      displayName,
      equipmentNumber,
      isOeeCalculable,
      cycleTime,
      cycleTimeDelay,
      description,
      runningTime,
      productionCount,
      defectCount,
    } = requestBody;

    // Define the parameters for the DynamoDB update operation
    const params = {
      TableName: "workstations",
      Key: {
        stationId: stationId,
      },
      UpdateExpression: `set displayName = :displayName, equipmentNumber = :equipmentNumber, isOeeCalculable = :isOeeCalculable,
                                cycleTime = :cycleTime, cycleTimeDelay = :cycleTimeDelay, description = :description,
                                runningTime = :runningTime, productionCount = :productionCount, defectCount = :defectCount`,
      ExpressionAttributeValues: {
        ":displayName": displayName,
        ":equipmentNumber": equipmentNumber,
        ":isOeeCalculable": isOeeCalculable,
        ":cycleTime": cycleTime,
        ":cycleTimeDelay": cycleTimeDelay,
        ":description": description,
        ":runningTime": runningTime,
        ":productionCount": productionCount,
        ":defectCount": defectCount,
      },
      ConditionExpression: "attribute_exists(stationId)", // ensure that the item exists before updating
      ReturnValues: "ALL_NEW", // return the updated item after update
    };

    // Use the DynamoDB update operation to update the item in the table
    const updatedWorkstation = await dynamodb.update(params).promise();

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Workstation ${stationId} for Plant ${plantIndex} updated successfully`,
        workstation: updatedWorkstation.Attributes,
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
