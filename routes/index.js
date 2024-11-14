import express from "express";
import addBookController from "../controllers/addBook.js";
import getAllBooksController from "../controllers/getAllBooks.js";
import deleteBookController from "../controllers/deleteBook.js";

const router = express.Router();

router.post('/add-book',addBookController)
router.get('/all-books',getAllBooksController)
router.delete('/delete-book/:id',deleteBookController)

export default router;
