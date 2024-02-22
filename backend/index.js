const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

const { connectDB } = require("./db");

const app = express();

const dotenv = require("dotenv").config();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Succes!" });
});

app.listen(3000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
