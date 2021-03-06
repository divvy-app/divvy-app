/**
 * @file Defines the top-level server logic for the backend of the Divvy app.
 */
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

// Define runtime constants
const PORT_NUMBER = 3000;
const ERROR_TEMPLATE = Object.freeze({
  internalStatus: 500,
  externalStatus: 400,
  log: "Unknown error encountered. Unable to retrieve stack trace.",
  msg: Object.freeze({ err: "Error encountered. Please try again." }),
});

// Load baseline app and external middleware
const app = express();
app.use(morgan(':date :method ":url"'));
app.use(express.static(path.resolve(__dirname, "../../dist")));
app.use(express.json());
app.use(cookieParser());

// Rest of file defines middleware for custom API endpoints
if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) => {
    const indexFile = path.join(__dirname, "../client/index.html");
    return res.status(200).sendFile(indexFile);
  });
}

app.use((error, req, res, next) => {
  const formattedError = { ...ERROR_TEMPLATE, ...error };
  console.error(formattedError.internalStatus);
  console.error(formattedError.log);

  return res.status(formattedError.externalStatus).json(formattedError.msg);
});

// Set up port
app.listen(PORT_NUMBER, () => {
  console.log(`Listening on http://localhost:${PORT_NUMBER}`);
});
