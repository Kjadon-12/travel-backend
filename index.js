import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";


dotenv.config();


const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
}); 

app.use("/v1", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});