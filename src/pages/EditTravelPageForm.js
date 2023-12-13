import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const EditTravelPageForm = ({ travelToEdit }) => {
    const originalDate = new Date(travelToEdit.dateOfFlight);
    
    const [destination, setDestination] = useState(travelToEdit.destination);
    const [yearVisited, setYearVisited] = useState(travelToEdit.yearVisited);
    const [duration, setDuration] = useState(travelToEdit.duration);
    const [dateOfFlight, setDateOfFlight] = useState(travelToEdit.dateOfFlight);
    const [notes, setNotes] = useState(travelToEdit.notes);

    const redirect = useNavigate();

    const editTravel = async () => {
        try {
            const response = await fetch(`/travels/${travelToEdit._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    destination: destination,
                    yearVisited: yearVisited,
                    duration: duration,
                    dateOfFlight: dateOfFlight,
                    notes: notes,
                }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.status === 200) {
                alert(`Travel successfully updated!`);
                console.log('Redirecting to the travel page...')
                // Redirect to the travel page after a successful update
                redirect(`/travel/${travelToEdit._id}`);
            } else {
                const errMessage = await response.json();
                alert(`Error updating travel (${travelToEdit._id}): ${response.status}. ${errMessage.TravelUpdateError}`);
            }
        } catch (error) {
            console.error('Error updating travel:', error);
        } finally {
            // Redirect to the home page regardless of the update result
            redirect("/");
        }
    }

    return (
        <>
            <article>
                <h2>Edit a travel</h2>
                <p>Paragraph about this page.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>Which travel are you editing?</legend>
                        <label htmlFor="destination">Destination</label>
                        <input
                            type="text"
                            value={destination}
                            onChange={e => setDestination(e.target.value)}
                            id="destination" />

                        <label htmlFor="yearVisited">Year visited</label>
                        <input
                            type="number"
                            value={yearVisited}
                            onChange={e => setYearVisited(e.target.value)}
                            id="yearVisited" />

                        <label htmlFor="duration">Duration (days)</label>
                        <input
                            type="number"
                            value={duration}
                            onChange={e => setDuration(e.target.value)}
                            id="duration" />

                        <label htmlFor="dateOfFlight">Date of Flight</label>
                        <input
                            type="text"
                            value={dateOfFlight}
                            onChange={e => setDateOfFlight(e.target.value)}
                            id="dateOfFlight" />

                        <label htmlFor="notes">Notes</label>
                        <textarea
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            id="notes" />

                        <label htmlFor="submit">
                            <button
                                onClick={editTravel}
                                id="submit"
                            >Save</button> updates to the collection
                        </label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditTravelPageForm;
