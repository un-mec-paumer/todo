import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbHost = 'localhost';
const dbPort = 27017;
const dbName = 'tasksBase';
// const dbURI = `mongodb://${dbHost}:${dbPort}/${dbName}`;
const dbURI = process.env.uri || "merde";

if (dbURI === "merde") {
    console.error("Database URI not found in environment variables. Please set the 'uri' variable in your .env file.");
    process.exit(1);
}

console.log(`Connecting to MongoDB at ${dbURI}...`);
const db = mongoose.createConnection(dbURI);
db.useDb("tasks");
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        unique: true
    },
    urgency: {
        type: Number,
        default: 3,
        min: 1,
        max: 5,
        set: (v: number) => {
            if (v < 1) return 1;
            if (v > 5) return 5;
            return v;
        }
    }
});

const Task = db.model("Task", taskSchema, "tasks");
const dbTasks = db.collections["tasks"];
export { dbTasks, Task };