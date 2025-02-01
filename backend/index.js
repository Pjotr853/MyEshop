import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();            //umožňuje načítať premenné z .env

const app = express();
app.use(express.json());
app.use(cors());            //umožňuje komunikáciu medzi frontend a backend
app.use(morgan("dev"));     //logy, odozva requestov

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server beží na porte ${PORT}`));
