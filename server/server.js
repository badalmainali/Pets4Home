const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./database/database");
const { path } = require("./app");

// Handling uncaught exception:
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});
// Middleware

// Config:
dotenv.config({ path: "config/config.env" });

// Database Connection:
connectDatabase();

const server = app.listen(
  5000,
  console.log(`Server Runnning on http://localhost:5000`)
);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
  // res.send('hanrfa')
);

// Unhandled rejection:
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server");

  server.close(() => {
    process.exit(1);
  });
});
