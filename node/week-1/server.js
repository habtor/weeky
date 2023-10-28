/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");

  let path = "./";

  if (request.url === "/") {
    path += "index.html";
    response.statusCode = 200;
  } else if (request.url === "/index.js") {
    path += "index.js";
    response.statusCode = 200;
  } else if (request.url === "/style.css") {
    path += "style.css";
    response.statusCode = 200;
  } else {
    console.log("No page found");
    response.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      response.end();
    } else {
      response.end(data);
    }
  });
});

server.listen(PORT, () => console.log("Server running"));
