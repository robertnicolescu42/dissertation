// sendAlert.js

const WebSocket = require("ws");

function sendAlert(wss) {
  const plants = ["PIT", "TOK", "TEST"];
  const stations = {
    PIT: ["Assembly Line 01", "PITest", "Workstation_001"],
    TOK: ["Workstation_002"],
    TEST: ["Assembly Line 02", "TESTest"],
  };

  const plantIndex = plants[Math.floor(Math.random() * plants.length)];
  const stationIndex = Math.floor(Math.random() * stations[plantIndex].length);
  const stationId = stations[plantIndex][stationIndex];
  const severities = ["WARNING", "INFO", "ERROR"];
  const severity = severities[Math.floor(Math.random() * severities.length)];
  const code = Math.floor(Math.random() * 1000) + 1;
  const message = `Alert ${code}`;
  const timestamp = new Date().toISOString();

  const alert = {
    alertGroupId: "1",
    plantIndex: plantIndex,
    stationId: stationId,
    severity: severity,
    code: code.toString(),
    message: message,
    timestamp: timestamp,
  };

  // Convert the alert to a string and send it to all connected clients
  const messageToSend = JSON.stringify(alert);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(messageToSend);
    }
  });
}

module.exports = sendAlert;
