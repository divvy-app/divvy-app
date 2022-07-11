const express = require("express");
const path = require("path");
const app = express();
const PORT_NUMBER = 3000;

const ERROR_TEMPLATE = Object.freeze({
  internalStatus: 500,
  externalStatus: 400,
  log: "Unknown error encountered. Unable to retrieve stack trace.",
  msg: { err: "Error encountered. Please try again." },
});

app.use(express.static(path.resolve(__dirname, "../../dist")));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Test");
  const indexFile = path.join(__dirname, "../client/index.html");
  return res.status(200).sendFile(indexFile);
});

app.use((error, request, response, next) => {
  console.log("Test2");
  const formattedError = { ...ERROR_TEMPLATE, ...error };
  console.error(formattedError.internalStatus);
  console.error(formattedError.log);

  return response
    .status(formattedError.externalStatus)
    .json(formattedError.msg);
});

app.listen(PORT_NUMBER, () => {
  console.log(`Listening on localhost:${PORT_NUMBER}`);
});
