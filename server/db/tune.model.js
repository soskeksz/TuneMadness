// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const TuneSchema = new Schema({
  title: String,
  artists: [String],
  fullTitle: String,
  year: Number,
  style: [String],
  bpm: Number,
  mainFlow: String,
  accentFlow: String,
  dropPeriods: Number,
  introLength: Number,
  isPlate: Boolean,
  price: Number,
  version: String,
  soundcloudLink: String,
  embeddedSoundcloudLink: String,
  
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tune", TuneSchema);