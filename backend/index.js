const express = require("express");
const dotenv = require("dotenv").config();
const rootRouter = require("./routes/index");
const cors = require("cors");
const { connectDB } = require("./db");
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
