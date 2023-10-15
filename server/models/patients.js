import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const patients = mongoose.model("patients", patientSchema)

export default patients;