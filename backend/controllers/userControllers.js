import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";


export async function registerUser(req, res) {
    try {
      const { firstname, lastname, email, password, role } = req.body;
  
      if (!firstname || !lastname || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Hash the password and save the user to the database
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new userModel({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role,
      });
  
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  