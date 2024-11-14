import express, { Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import connectDB from './config/db.js';

dotenv.config();
const PORT = process.env.PORT || 3030;
const app = express();

app.use(cors({
    origin:"https://book-spot-bice.vercel.app",
    methods : ["GET", "POST", "DELETE"]
}));
app.use(express.json());
app.use(cookieParser());

app.use('/', router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Running on port", PORT);
    });
});
