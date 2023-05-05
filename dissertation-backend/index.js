// index.js

const WebSocket = require('ws');
const sendAlert = require("./sendAlert");

// Create a new WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Handle WebSocket connections
wss.on("connection", (ws) => {
  console.log("WebSocket connection established.");

  // Handle incoming messages
  ws.on("message", (data) => {
    console.log("Received message:", data);
  });
});

// Send an alert every 5 seconds
setInterval(() => {
  sendAlert(wss);
}, 5000);
