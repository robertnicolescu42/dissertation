const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Parse the request body containing the new plant data
    const requestBody = event;

    // Construct a new DynamoDB item from the request body
    const newItem = {
      plantIndex: requestBody.plantIndex,
      title: requestBody.title,
      description: requestBody.description,
      imageUrl: requestBody.imageUrl,
    };

    // Define the parameters for the DynamoDB put operation
    const params = {
      TableName: "plants",
      Item: newItem,
      ConditionExpression: "attribute_not_exists(plantIndex)", // ensure no duplicate plantIndex values
    };

    // Use the DynamoDB put operation to add the new item to the table
    await dynamodb.put(params).promise();

    // Return a success response
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: `Plant ${newItem.plantIndex} added successfully`,
      }),
    };
  } catch (error) {
    // Handle any errors that occur during the operation
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};
