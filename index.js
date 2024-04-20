const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
  https.get("https://jsonplaceholder.typicode.com/todos/1", (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const todos = JSON.parse(data);
      console.log(todos);
      res.status(200).json(todos);
    });
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
