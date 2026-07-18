import mongoose from "mongoose";
process.loadEnvFile();

const { DB_PROTOCOL, DB_HOST, DB_PASS, DB_USER, DB_OPTIONS, DB_NAME } =
  process.env;
const MONGODB_URI = 'mongodb://comissol92_db_user:ieuB5mNIA5TAiLpm@ac-ble6lqd-shard-00-00.ffbq0mi.mongodb.net:27017,ac-ble6lqd-shard-00-01.ffbq0mi.mongodb.net:27017,ac-ble6lqd-shard-00-02.ffbq0mi.mongodb.net:27017/dogsDB?ssl=true&replicaSet=atlas-9zcxv9-shard-0&authSource=admin&appName=Comissol'

//`${DB_PROTOCOL}://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?${DB_OPTIONS}`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB; 