// Controllers for the Travel Collection

import 'dotenv/config';
import express from 'express';
import * as travels from './travel-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post('/travels', (req, res) => {
    travels.addTravel(
        req.body.destination,
        req.body.yearVisited,
        req.body.duration,
        req.body.dateOfFlight,
        req.body.notes
    )
        .then(travel => {
            console.log(`"${travel.destination}" was added to the collection.`);
            res.status(201).json(travel);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An error occurred while adding the travel entry.' });
        });
});
// RETRIEVE controller ****************************************************
app.get('/travels', (req, res) => {
    travels.getAllTravels()
        .then(travels => {
            if (travels !== null) {
                console.log(`All travel entries were retrieved from the collection.`);
                res.json(travels);
            } else {
                res.status(404).json({ Error: 'No travel entries found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An error occurred while retrieving travel entries.' });
        });
});

// RETRIEVE by ID controller
app.get('/travels/:_id', (req, res) => {
    travels.getTravelById(req.params._id)
        .then(travel => {
            if (travel !== null) {
                console.log(`"${travel.destination}" was retrieved, based on its ID.`);
                res.json(travel);
            } else {
                res.status(404).json({ Error: 'No travel entry found with the provided ID.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An error occurred while retrieving the travel entry.' });
        });
});

// UPDATE controller ************************************
app.put('/travels/:_id', (req, res) => {
    travels.updateTravel(
        req.params._id,
        req.body.destination,
        req.body.yearVisited,
        req.body.duration,
        req.body.dateOfFlight,
        req.body.notes
    )
        .then(travel => {
            console.log(`"${travel.destination}" was updated.`);
            res.json(travel);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'An error occurred while updating the travel entry.' });
        });
});

// DELETE Controller ******************************
app.delete('/travels/:_id', (req, res) => {
    travels.deleteTravelById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} travel entry was deleted.`);
                res.status(200).send({ Success: 'Travel entry deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'No travel entry found with the provided ID.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'An error occurred while deleting the travel entry.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
