const express = require("express");
const bookRoute = express.Router();

const books = [
  {
    title: "love of war",
    id: 1,
    year: 2093,
  },
  {
    title: "all in one",
    id: 2,
    year: 2012,
  },
  {
    title: "the bad guy",
    id: 3,
    year: 2044,
  },
  {
    title: "rim of the world",
    id: 4,
    year: 2022,
  },
];

bookRoute.get("/", (req, res) => {
  res.json(books);
});

bookRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    res.status(404).end("page not found");
  }
  res.json(book);
});

bookRoute.post("/", (req, res) => {
  const book = req.body;
  books.push(book);
  res.json(books);
});

bookRoute.put("/:id", (req, res) => {
  const id = req.params;
  const book = req.body;
  const bookIndex = books.findIndex((book) => book.id == parseInt(id));

  if (bookIndex == -1) {
    req.status(404).end("book not found");
  }
  books[bookIndex] = book;
  res.json(books);
});

bookRoute.delete("/:id", (req, res) => {
  const id = req.params;
  const index = books.findIndex((book) => book.id == parseInt(id));

  if (index == -1) {
    res.status(404).end("page not found");
  }
  books.splice(index, 1);
  res.json(books);
});

module.exports = { bookRoute };