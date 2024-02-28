const express = require("express");
const bodyParser = require("body-parser");
const bookRoute = require("./routes/books");
const authorRoute = require("./routes/authors");

const port = 4000;
const app = express();

app.use("book", bookRoute);
app.use("/author", authorRoute);


app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.end("home page")
});

app.get("/about", (req, res) => {
  res.end("about page");
});

app.get("/contact", (req, res) => {
  res.end("contact page");
})

app.listen(port, () => {
  console.log(`server started successfully at port ${port}`);
})
