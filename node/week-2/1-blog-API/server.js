const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());


// Request
app.get("/", function (req, res) {
  res.send("Hello World");
});


// Create
app.post("/blogs", (req, res) => {
  const { title, content } = req.body;
  fs.writeFileSync(title, content);
  res.end("blog added");
});


// Update
app.put("/posts/:title", (req, res) => {
  const { title, content } = req.body;
  if (fs.existsSync(req.params.title)) {
    fs.writeFileSync(title, content);
    res.end("ok");
  } else {
    res.status(404);
    res.end("This post does not exist!");
  }
});


// Delete
app.delete("/blogs/:title", (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end("ok");
  } else {
    res.status(404);
    res.end("This post does not exist!");
  }
});


// Request
app.get("/blogs/:title", (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.end(title);
  } else {
    res.status(404);
    res.end("This post does not exist!");
  }
});


// Request All
app.get("/blogs", (req, res) => {
  const blogsPath = "./blogs";
  const files = fs.readdirSync(blogsPath);
  let contentArray = []
  files.forEach((file) => {
    const filePath = path.join(blogsPath, file);
    const cont = fs.readFileSync(filePath, "utf8");
    contentArray.push(cont)
  });
  res.send(contentArray);
});
app.listen(3000, () => console.log("server is runing on port 3000"));
