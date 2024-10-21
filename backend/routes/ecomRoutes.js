import express from "express";
import { registerUser } from "../controllers/userControllers.js"; // Make sure path is correct

const ecomRouter = express.Router();

// Define your route for registering a user
ecomRouter.post('/user/register', registerUser);

export default ecomRouter;
