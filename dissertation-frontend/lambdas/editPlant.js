const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Parse the request body containing the updated plant data
    const requestBody = event;

    // Define the key of the item to be updated
    const key = {
      plantIndex: requestBody.plantIndex,
    };

    // Construct a new DynamoDB item from the updated data
    const updatedItem = {
      title: requestBody.title,
      description: requestBody.description,
      imageUrl: requestBody.imageUrl,
    };

    // Define the parameters for the DynamoDB update operation
    const params = {
      TableName: "plants",
      Key: key,
      UpdateExpression:
        "set #title = :title, #description = :description, #imageUrl = :imageUrl",
      ExpressionAttributeNames: {
        "#title": "title",
        "#description": "description",
        "#imageUrl": "imageUrl",
      },
      ExpressionAttributeValues: {
        ":title": updatedItem.title,
        ":description": updatedItem.description,
        ":imageUrl": updatedItem.imageUrl,
      },
      ConditionExpression: "attribute_exists(plantIndex)", // ensure that the item exists before updating
    };

    // Use the DynamoDB update operation to update the item in the table
    await dynamodb.update(params).promise();

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Plant ${key.plantIndex} updated successfully`,
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
