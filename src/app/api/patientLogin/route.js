import { databaseConnection } from "@/database/database";
import { Patient } from "@/models/patient.model";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";
export async function POST(request) {
  await databaseConnection();
  try {
    const data = await request.json();
    const { patient_email, patient_password } = data;
    const existedPatient = await Patient.findOne({ patient_email });
    if (!existedPatient)
      return NextResponse.json({ msg: "No patient found", success: false });
    // password checking...;
     const passwordCheck =  await bcrypt.compare(patient_password,existedPatient.patient_password);
     if(!passwordCheck) return NextResponse.json({msg:"Password is incorrect",success:false})
    // generate the json webtoken.....
    const payload = {
       email:existedPatient.patient_email,
       id:existedPatient._id,
       
    }
    const token =  jwt.sign(payload,process.env.secret,{ expiresIn: '24h' })
    const Response = NextResponse.json({msg:"Login sucessfully",success:true});

  Response.cookies.set("token",token,{httpOnly:true})
  return Response;
  } catch (error) {
    return NextResponse.json({ error, success: false });
  }
}
