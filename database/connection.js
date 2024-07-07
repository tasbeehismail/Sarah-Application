import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Connected successfully to database');
    }).catch((err) => {
        console.log('Unable to connect to database', err);
    })
}

export default connectDB