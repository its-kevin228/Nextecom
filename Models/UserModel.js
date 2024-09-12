import mongoose, { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator"; // Use shorter name

const userSchema = new Schema({
name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxLength: 20,
    minLength: 5,
},
email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    maxLength: 50,
    minLength: 5,
    unique: true, // Ensure email is unique
    lowercase: true, // Convert email to lowercase for case-insensitivity
},
password: String,
role: {
    type: String,
    default: "user",
},
image: String,
resetCode: {
    data: String,
    expiresAt: {
type: Date,
      default: () => new Date(Date.now() + 10 * 60 * 1000), // Arrow function for clarity
    },
},
}, { timestamps: true }); // Add timestamps automatically

// Apply unique validator plugin
userSchema.plugin(uniqueValidator);

// Export the model
export default model("User", userSchema); // Correct model name casing