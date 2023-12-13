import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddTravelPageForm = () => {

    const [destination, setDestination] = useState('');
    const [yearVisited, setYearVisited] = useState('');
    const [duration, setDuration] = useState('');
    const [dateOfFlight, setDateOfFlight] = useState('');
    const [notes, setNotes] = useState('');

    const redirect = useNavigate();

    const addTravel = async () => {
        const newTravel = { destination, yearVisited, duration, dateOfFlight, notes };
        const response = await fetch('/travels', {
            method: 'post',
            body: JSON.stringify(newTravel),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert(`Travel successfully added!`);
            redirect("/");
        } else {
            const errMessage = await response.json();
            alert(`Error adding travel: ${response.status}. ${errMessage.AddTravelError}`);
            redirect("/");
        }
    };


    return (
        <>
            <article>
                <h2>Add a travel</h2>
                <p>Paragraph about this page.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>Which travel are you adding?</legend>
                        <label htmlFor="destination">Destination</label>
                        <input
                            type="text"
                            placeholder="Destination of the travel"
                            value={destination}
                            onChange={e => setDestination(e.target.value)}
                            id="destination" />

                        <label htmlFor="yearVisited">Year visited</label>
                        <input
                            type="number"
                            placeholder="Year of the travel"
                            value={yearVisited}
                            onChange={e => setYearVisited(e.target.value)}
                            id="yearVisited" />

                        <label htmlFor="duration">Duration (days)</label>
                        <input
                            type="number"
                            placeholder="Duration of the travel in days"
                            value={duration}
                            onChange={e => setDuration(e.target.value)}
                            id="duration" />

                        <label htmlFor="dateOfFlight">Date of Flight</label>
                        <input
                            type="date"
                            value={dateOfFlight}
                            onChange={e => setDateOfFlight(e.target.value)}
                            id="dateOfFlight" />

                        <label htmlFor="notes">Notes</label>
                        <textarea
                            placeholder="Any notes about the travel"
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            id="notes" />

                        <label htmlFor="submit">
                            <button
                                type="submit"
                                onClick={addTravel}
                                id="submit"
                            >Add</button> to the collection
                        </label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddTravelPageForm;
