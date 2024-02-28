const express = require("express");

const authorRoute = express.Router();

const authors = [
  {
    name: "J.K. Rowling",
    id: 1,
    born: 1965,
  },
  {
    name: "J.R.R. Tolkien",
    id: 2,
    born: 1892,
  },
  {
    name: "George R.R. Martin",
    id: 3,
    born: 1948,
  },
];

authorRoute.get("/", (req, res) => {
  res.json(authors);
});

authorRoute.get("/:id", (req, res) => {
  const id = req.params;
  const author = authors.find((author) => author.id === parseInt(id));

  if (!author) {
    res.status(404).end("page not found");
  } else {
    res.json(author);
  }
});

authorRoute.post("/", (req, res) => {
  const newAuthor = req.body;
  authors.push(newAuthor);
  res.json(authors);
});

authorRoute.put("/:id", (req, res) => {
  const id = req.params;
  const author = req.body;
  const index = authors.findIndex((author) => author.id === parseInt(id));

  if (!index == -1) {
    res.status(404).end("file not found");
  } else {
    authors[index] = author;
  }
});

authorRoute.delete("/:id", (req, res) => {
  const id = req.params;
  const index = authors.findIndex((author) => author.id == parseInt(id));

  if (index == -1) {
    res.status(404).end("page not found");
  } else {
    authors.splice(index, 1);
    res.json(authors);
  }
});

module.exports = authorRoute;
