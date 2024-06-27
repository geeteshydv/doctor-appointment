import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    patient_name:{
        type:String,
        required:true,
    },
    patient_email:{
        type:String,
        required:true,
        unique:true,
    },
    patient_age:{
        type:Number,
        required:true,
    },
    patient_mobile_number:{
        type:Number,
        required:true,
        unique:true,
    },
    patient_disease:{
        type:[String],
    },
    patient_password:{
        type:String,
        required:true,
    },
},{timestamps:true})

export const Patient = mongoose.models.Patient || mongoose.model("Patient",patientSchema);