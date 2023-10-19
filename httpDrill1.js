const fs = require("fs");
const http = require("http");
const path = require("path");
const directoryName = "./public";
const fileNameHtml = "index.html";
const fileNameJson = "data.json";
const fileNameUuid = "uuid.json";
const fileName200 = "status200.txt";
const fileName300 = "status300.txt";
const fileName400 = "status400.txt";
const fileName500 = "status500.txt";

const uuidv4 = require("./public/uuid");
let filePath = "";
let statusCode = 200;
let delay = 0;

http
  .createServer((req, res) => {
    let route = req.url;
    if (route.includes("delay")) {
      filePath = path.join(directoryName, fileName200);
      delay = route.substring(7, route.length);
      console.log(delay);
    }
    switch (route) {
      case "/html":
        filePath = path.join(directoryName, fileNameHtml);
        break;
      case "/json":
        filePath = path.join(directoryName, fileNameJson);
        break;
      case "/uuid":
        const uuid = uuidv4();
        let jsonData = '{"uuid" :' + '"' + uuid + '"' + "}";
        fs.writeFile("./public/uuid.json", jsonData, (err) => {});
        filePath = path.join(directoryName, fileNameUuid);
        break;
      case "/status/200":
        statusCode = 200;
        filePath = path.join(directoryName, fileName200);
        break;
      case "/status/300":
        filePath = path.join(directoryName, fileName300);
        statusCode = 300;
        break;
      case "/status/400":
        filePath = path.join(directoryName, fileName400);
        statusCode = 400;
        break;
      case "/status/500":
        filePath = path.join(directoryName, fileName500);
        statusCode = 500;
        break;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text" + route });
        res.end("404: File not found");
      } else {
        if (delay == 0) {
          res.writeHead(statusCode, { "Content-Type": "text" + route });
          res.end(data);
        } else {
          setTimeout(() => {
            res.writeHead(statusCode, { "Content-Type": "text" + route });
            res.end(data);
          }, delay * 1000);
        }
      }
    });
  })
  .listen(8000);
