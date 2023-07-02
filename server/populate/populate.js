require("dotenv").config();
const mongoose = require("mongoose");
const TuneModel = require("../db/tune.model");


const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const populateFirstTune = async () => {
    await TuneModel.deleteMany({});
    const firstTune = {

        title: "BAKPAK",
        artists: ["LOKVST"],
        fullTitle: "LOKVST - BAKPAK",
        year: 2021,
        style: ["south-american", "wobbly", "delay", "dense-flow"],
        bpm: 145,
        mainFlow: "1/4",
        accentFlow: "1/8t",
        dropPeriods: 3,
        introLength: 16,
        isPlate: false,
        price: 0,
        version: "original",
        soundcloudLink: "https://on.soundcloud.com/SpGZB"
    }

    TuneModel.create(firstTune);
    console.log("first tune created");
}

const main = async () => {
    await mongoose.connect(mongoUrl);

    await populateFirstTune();

    await mongoose.disconnect();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
  