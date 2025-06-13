import mongoose from 'mongoose';
import { DB_USER, DB_PASS, CLUSTER, DATABASE } from "@/config/config.js";

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${CLUSTER}/${DATABASE}`;;
mongoose.set('strictQuery', true);
export const connectDB = async() => {
    if(mongoose.connection.readyState === 1){
        return console.log("You are already connected")
    }

    try{
        await mongoose.connect(url)
        console.log("Connected to MongoDB")
        console.log(`DB: ${mongoose.connection.db.databaseName}`)
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log(`Collections: ${collections.map(c => c.name)}`)
    }catch(error){
        console.error("Error connecting: ", error);
        throw error;
    }
}