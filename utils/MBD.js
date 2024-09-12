import { DB_URL } from "@/config";
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const dbConnect = async () => {
if (mongoose.connection.readyState >= 1) {
    return;
}

try {
    await mongoose.connect(DB_URL, {
      dbName: "firstmgbd", // Replace with your actual database name
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
}
};

export default dbConnect;