import mongoose, {Schema} from "mongoose";

const BookingSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    partySize: String,
    slug: String
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking
