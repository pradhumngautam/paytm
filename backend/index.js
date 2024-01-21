const express = require("express");
const rootRouter = require('./routes/index');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/vi", rootRouter);

app.listen(3000);


