require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const EmployeeModel = require("./db/employee.model");
const EquipmentModel = require("./db/equipment.model");

const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(express.json());


//ENDPOINTS
app.get("/api/tunes", async)

app.get("/api/tunes/:id", async (req, res) => {
  res.status(200)
})






const main = async () => {
    await mongoose.connect(MONGO_URL);
  
    app.listen(PORT, () => {
      console.log("App is listening on 8080");
      console.log("Try /api/employees route right now");
    });
  };
  
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
  