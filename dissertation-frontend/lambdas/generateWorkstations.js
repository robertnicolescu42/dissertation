const AWS = require("aws-sdk");
// const uuid = require("uuid");

// Set up the DynamoDB client
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // Define the list of workstations to add to the table
  const workstations = [
    {
      stationId: "fabrication_machining",
      displayName: "Workstation 001",
      equipmentNumber: "5z4b9j4u438",
      isOeeCalculable: true,
      cycleTime: 637,
      cycleTimeDelay: 31,
      description: "Machines auto parts",
      plantIndex: "PIT",
      runningTime: 61,
      productionCount: 37,
      defectCount: 10,
    },
    {
      stationId: "quality_design",
      displayName: "Workstation 002",
      equipmentNumber: "g1s7efzkw7u",
      isOeeCalculable: false,
      cycleTime: 485,
      cycleTimeDelay: 46,
      description: "Designs auto parts",
      plantIndex: "TOK",
      runningTime: 23,
      productionCount: 83,
      defectCount: 4,
    },
    // Add more workstations here as needed
  ];

  // Loop through the list of workstations and add them to the table
  for (const workstation of workstations) {
    const params = {
      TableName: "Workstations",
      Item: workstation,
    };

    await dynamodb.put(params).promise();
  }

  // Return a success message
  return {
    statusCode: 200,
    body: "Workstations added successfully",
  };
};
