const AWS = require("aws-sdk");

// Set up the DynamoDB client
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Define the parameters for the DynamoDB scan operation
    const params = {
      TableName: "workstations",
    };

    // Use the DynamoDB scan operation to retrieve all items from the table
    const result = await dynamodb.scan(params).promise();

    // Return the list of workstations as the response
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    // Handle any errors that occur during the operation
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
