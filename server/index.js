import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import UserModel from './models/patients.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const CONNECTION_URL = "mongodb+srv://emilynnn:"+ process.env.PASSWORD + "@cluster0.h7qc1e4.mongodb.net/patientManager?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen (3001, () =>  console.log('server is running')))
    .catch((error )=> console.log(error.message))

app.get("/getPatients", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post("/addPatient", async (req, res) => {
    const patient = req.body;
    const newPatient = new UserModel(patient);
    await newPatient.save();

    res.json(patient);
});


