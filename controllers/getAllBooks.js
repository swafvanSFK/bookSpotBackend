import bookModel from "../models/bookModel.js";

const getAllBooksController = async (req, res) => {
  try {
    const books = await bookModel.find();

    if (!books || !books.length === 0) {
      return res.status(404).json({
        message: "No books found",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      message: "Books found",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the books.",
      error: error.message,
    });
  }
};

export default getAllBooksController