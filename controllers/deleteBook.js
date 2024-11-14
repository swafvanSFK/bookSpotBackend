import bookModel from "../models/bookModel.js";

const deleteBookController = async (req, res) => {
  try {
    console.log("Hitted");
    
    const { id } = req.params;
    
    console.log(id);
    const deletedBook = await bookModel.findByIdAndDelete(id);

    
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully.",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the book.",
      error: error.message,
    });
  }
};

export default deleteBookController;