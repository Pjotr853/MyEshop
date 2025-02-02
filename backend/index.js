import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import Products from "./routes/product.js";

dotenv.config(); // Načíta premenné z .env

const app = express();

app.use(express.json());
app.use(cors()); // Umožňuje komunikáciu medzi frontend a backend
app.use(morgan("dev")); // Logy requestov

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {  
   // useNewUrlParser: true,
   // useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((e) => {
      console.error("Connection error:", e);
    });

app.use("/products", Products);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server beží na porte ${PORT}`));
