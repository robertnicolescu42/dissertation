const AWS = require("aws-sdk");

// Initialize DynamoDB client
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  try {
    // Get all items from "plants" table
    const params = {
      TableName: "plants",
    };
    const response = await dynamodb.scan(params).promise();

    // Extract plant objects from response
    const plants = response.Items.map((item) => ({
      plantIndex: item.plantIndex,
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(plants),
    };
  } catch (err) {
    console.error("Error:", err);
    return {
      statusCode: 500,
      body: "Error listing items.",
    };
  }
};
