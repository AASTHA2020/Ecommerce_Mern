import express from "express";
import cors from "cors";
import mongoose from "mongoose"; 
import "dotenv/config";
import ecomRouter from "./routes/ecomRoutes.js"; // Correct path

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", ecomRouter);

// Wrapping mongoose connection and server start inside an async function
const startServer = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.bbhnx.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`);
      console.log("Connected to MongoDB");
      
      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
      console.log("Error connecting to the database or starting the server: ", error);
    }
  };
  

  
  startServer();
  
    


