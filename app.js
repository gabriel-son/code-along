const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
	extended: true,
  })
);

app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.post("/send-data", (req, res) => {
  const data = req.body;
  data.age = 45;
  res.send(data);
})

// create a post route
// send in data in url encoded format
// send back the data in json format


app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});