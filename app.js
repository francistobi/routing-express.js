const express = require("express");
const bodyParser = require("body-parser");
const bookRoute = require("./routes/books");
const authorRoute = require("./routes/authors");

const port = 9000;
const app = express();

app.use("book", bookRoute);
app.use("/author", authorRoute);


app.use(bodyParser.json());


app.use("/", (req, res) => {
  res.send("home page")
});

app.use("/about", (req, res) => {
  res.send("about page");
});

app.use("/contact", (req, res) => {
  res.send("contact page");
})

app.listen(port, () => {
  console.log(`server started successfully at port ${port}`);
})
