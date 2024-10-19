const express = require("express");
const router = express.Router();

const { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor, 
  createBook,  getAllBooks, getBookById, updateBook, deleteBook} = require("../controller/libraryController");


router.post("/api/v1/author", createAuthor);
router.get("/api/v1/author", getAllAuthors);
router.get("/api/v1/author/:author_id", getAuthorById);
router.put("/api/v1/author/:author_id", updateAuthor);
router.delete("/api/v1/author/:author_id", deleteAuthor);

router.post("/api/v1/book", createBook);
router.get("/api/v1/book", getAllBooks);
router.get("/api/v1/book/:book_id", getBookById);
router.put("/api/v1/book/:book_id", updateBook);
router.delete("/api/v1/book/:book_id", deleteBook);

module.exports = router;