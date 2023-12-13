// Models for the Travel Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if (err) {
        console.error('Error: Unable to connect to the MongoDB server.');
    } else {
        console.log('Success: Connected to the MongoDB server.');
    }
});

// SCHEMA: Define the collection's schema.
const travelSchema = mongoose.Schema({
    destination: { type: String, required: true },
    yearVisited: { type: Number, required: true },
    duration: { type: Number, required: true }, // Duration of stay in days
    dateOfFlight: { type: Date, required: true }, // Date of the flight
    notes: { type: String },
});

// Compile the model from the schema 
// by defining the collection name "travels".
const travels = mongoose.model('Travels', travelSchema);

// CREATE model *****************************************
const addTravel = async (destination, yearVisited, duration, dateOfFlight, notes) => {
    const travel = new travels({
        destination: destination,
        yearVisited: yearVisited,
        duration: duration,
        dateOfFlight: dateOfFlight,
        notes: notes
    });
    return travel.save();
}

// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const getAllTravels = async () => {
    const query = travels.find();
    return query.exec();
}

// RETRIEVE by ID
const getTravelById = async (_id) => {
    const query = travels.findById({ _id: _id });
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTravelById = async (_id) => {
    const result = await travels.deleteOne({ _id: _id });
    return result.deletedCount;
};

// UPDATE model *****************************************************
const updateTravel = async (_id, destination, yearVisited, duration, dateOfFlight, notes) => {
    const result = await travels.replaceOne({ _id: _id }, {
        destination: destination,
        yearVisited: yearVisited,
        duration: duration,
        dateOfFlight: dateOfFlight,
        notes: notes
    });
    return {
        _id: _id,
        destination: destination,
        yearVisited: yearVisited,
        duration: duration,
        dateOfFlight: dateOfFlight,
        notes: notes
    }
}

// EXPORT the variables for use in the controller file.
export { addTravel, getAllTravels, getTravelById, updateTravel, deleteTravelById }
