import { databaseConnection } from "@/database/database";
import { Patient } from "@/models/patient.model";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";
export async function POST(request) {
  await databaseConnection();

  try {
    const data = await request.json();
    const {
      patient_name,
      patient_email,
      patient_age,
      patient_mobile_number,
      patient_disease,
      patient_password,
    } = data;
    console.log(patient_email);
    const existedPatient = await Patient.findOne({patient_email});
    if (existedPatient)
      return NextResponse.json({
        msg: "Patient is already register",
        success: false,
      });
       // hashed password.... here we use the bcyrpt 
            const hashedPassword = await bcrypt.hash(patient_password,10)
    const patient = new Patient({
      patient_name,
      patient_age,
      patient_email,
      patient_mobile_number,
      patient_disease,
      patient_password : hashedPassword,
    });
    await patient.save();
    return NextResponse.json({ msg: "Patient is register", success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
