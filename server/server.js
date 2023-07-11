require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const TuneModel = require("./db/tune.model");

const { MONGO_URL, PORT = 8080 } = process.env;


if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();

app.use(express.json());
app.use(cors())

//ENDPOINTS
app.get("/api/tunes", async (req, res) => {
  const tunes = await TuneModel.find().sort({ created: "desc"});
  return res.json(tunes)
})

app.post("/api/tunes", async (req, res) => {
  const tune = req.body;
  console.log(req.body);
  try {
    const saved = await TuneModel.create(tune);
    return res.json(saved);
  } catch (error) {
    return next(error);
  }
})
/*
app.patch("/api/tunes", async (req, req) => {
  try {
    const tune = await TuneModel.findOneAndUpdate(
      { _id: req.params.id},
      { $set: { ...req.body} },
      { new: true}
    );
    return res.json(tune);
  } catch (error) {
    return next(error);
  }
})
*/
const main = async () => {
    await mongoose.connect(MONGO_URL);
  
    app.listen(PORT, () => {
      console.log("App is listening on 8080");
    });
  };
  
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
