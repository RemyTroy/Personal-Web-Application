import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Travel({ travel, onEdit, onDelete }) {
    // Format the date to remove the time part
    const formattedDate = travel.dateOfFlight ? travel.dateOfFlight.slice(0, 10) : '';

    return (
        <tr>
            <td>{travel.destination}</td>
            <td>{travel.yearVisited}</td>
            <td>{travel.duration}</td>
            <td>{formattedDate}</td> {/* Display the formatted date */}
            <td>{travel.notes}</td>
            <td><MdDeleteForever onClick={() => onDelete(travel._id)} /></td>
            <td><MdEdit onClick={() => onEdit(travel)} /></td>
        </tr>
    );
}

export default Travel;

