import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB();


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MMONGODB_URL}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERROR:", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listenting on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error;
//     }
// })()
