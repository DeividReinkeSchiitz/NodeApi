const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");
const app = express();

require("dotenv/config");

mongoose.connect(
  process.env.DB_CONNECTION_ATLAS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  },
  err => {
    if (err) throw err && `\n\n\n DATABASE NOT FOUND \n\n\n`;
    console.log("connected with mongodb local");
  }
);

app.use(express.json());
app.use(router);
app.use(cors());

const PORT = 3939;
app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running in port: ${PORT}`)
);
