import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true)

    if(connected){
        console.log("MongoDB already connected")
        return
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true
        console.log("connected to mongodb")
    }
    catch(err){
        console.log(err)
    }
}

export default connectDB