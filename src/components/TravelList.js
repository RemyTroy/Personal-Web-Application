import React from 'react';
import Travel from './Travel';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TravelList({ travels, onEdit, onDelete }) {
    return (
      <table id="travels">
        <caption>List of Travels</caption>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Year Visited</th>
            <th>Duration (Days)</th>
            <th>Date of Flight</th>
            <th>Notes</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {travels.map((travel, index) => (
            <Travel key={index} travel={travel} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    );
  }
  
  export default TravelList;