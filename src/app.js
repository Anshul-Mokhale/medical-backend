import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,  // Ensure this is set correctly
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Test endpoint for verifying CORS
app.get('/test-cors', (req, res) => {
    res.send('CORS is working');
});

// Routes import
import userRouter from './routes/user.routes.js';

app.use("/api/v1/users", userRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log(`CORS_ORIGIN: ${process.env.CORS_ORIGIN}`);
    console.log(`Server is running at port ${process.env.PORT || 8000}`);
});

export { app };
