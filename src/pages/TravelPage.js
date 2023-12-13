import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TravelList from '../components/TravelList';
import { Link } from 'react-router-dom';

function TravelsPage({ setTravel }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [travels, setTravels] = useState([]);

    // RETRIEVE the entire list of travels
    const loadTravels = async () => {
        const response = await fetch('/travels');
        const travels = await response.json();
        setTravels(travels);
    }

    // UPDATE a single travel
    const onEditTravel = async travel => {
        setTravel(travel);
        redirect("/edit");
    }

    // DELETE a single travel  
    const onDeleteTravel = async _id => {
        const response = await fetch(`/travels/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/travels');
            const updatedTravels = await getResponse.json();
            setTravels(updatedTravels);
        } else {
            console.error(`Helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the travels
    useEffect(() => {
        loadTravels();
    }, []);

    // DISPLAY the travels
    return (
        <>
            <h2>List of Travels</h2>
            <p>Welcome to the travel adventures! Explore my list of travels and relive the excitement of each destination. Whether it's the bustling streets of a vibrant city, the serene landscapes of a countryside, or the exotic beaches of a tropical paradise, each journey holds its unique charm. Feel free to add your own travel experiences and share the joy of exploration. Bon voyage!</p>
            <Link to="/create">Add Travel</Link>
            <TravelList
                travels={travels}
                onEdit={onEditTravel}
                onDelete={onDeleteTravel}
            />
        </>
    );
}

export default TravelsPage;