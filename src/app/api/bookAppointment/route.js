import { databaseConnection } from "@/database/database";
import { Appointment } from "@/models/appointment.model";
import { getUserData } from "@/utils/getUserData";
import { NextResponse } from "next/server";

export async function POST(request)
{
    await databaseConnection()
  try {
    console.log("enter in appoitment");
    const userData = getUserData(request);
    console.log(userData.id);
    const data = await request.json();
  
     if(userData.id)
      {
        const{patient_name,department_id,doctor_id,dateOfAppointment} = data;
       
        const existedDateOfAppointment = await Appointment.find({dateOfAppointment})
        console.log(existedDateOfAppointment);
        if(existedDateOfAppointment.length>5) return NextResponse.json({msg:"All slot are booked select other data",success:false})
        const appointment = new Appointment({
            patient_name,
            department_id,
            doctor_id,
            dateOfAppointment
      
        })
       const res =  await appointment.save();
       console.log(res);
      }
      else{
        return NextResponse.json({msg:"User is not register",success:false})
      }
    
    return NextResponse.json({msg:"Appointment booked",success:true})
  } catch (error) {
    return NextResponse.json({success:false})
  }
}