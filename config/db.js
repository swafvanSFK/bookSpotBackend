import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URI)
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;