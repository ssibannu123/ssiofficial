import mongoose from "mongoose";



// let mongodbUri = "mongodb://127.0.0.1:27017/ssi";
let mongodbUri = process.env.MONGODB_URI;
if (!mongodbUri) {
   console.log("Mongodb uri is not present and does not get from the env")
}


let connection;
let connectionPromise;


export async function dbConnect() {
    if (connection) {
        return connection;
    }

    if (!connectionPromise && mongodbUri) {
        connectionPromise = await mongoose.connect(mongodbUri)
            .then(() => {
                console.log("Database is connected")
            })
            .catch((error) => {
                console.log("error from database connection catch section", error)
            })
    }

    connection = await connectionPromise;
    return connection;
}