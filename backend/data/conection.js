import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URL;

const conection = async() => {
    try {

        await mongoose.connect(uri);
        console.log("Conectado a MongoDB Atlas");

    } catch(error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos");
    }
}

export default conection;