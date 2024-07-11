import Booking from "@/models/booking"
import { NextResponse } from "server/nextResponse"

export const GET =async(req) =>{
    const bookings = await Booking.find({})
return new NextResponse(JSON.stringify({message:'Hello World'}),{status:200})
}