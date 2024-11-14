import bookModel from "../models/bookModel.js";

const addBookController = async (req, res) => {
    console.log("hitted");
    
    try {
        const {title , author, description} = req.body;

        if (!title || !author || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields (title, author, description) are required."
            });
        }
        const newBook = new bookModel({
            title,
            author,
            description
        });

        const savedBook = await newBook.save();

        res.status(201).json({
            success : true,
            message : "Book added successfully.",
            data : savedBook
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while adding the book.",
            error: error.message
        });
    }
}

export default addBookController;