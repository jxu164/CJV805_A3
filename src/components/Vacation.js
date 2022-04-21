import React from 'react';

const Vacation = (props) =>{
    return (
        <div>
            <p> ID: {props.id}</p>
            <p> Hotel: {props.hotelName}</p>
            <p> Type: {props.resortType}</p>
            <p> Location: {props.location}</p>
            <p> Price: {props.price}</p>
            <p> Description: {props.description}</p>
            <p> House Rules: {props.houseRules}</p>
            <p> Amenities: {props.amenities}</p>
        </div>
    )
}

export default Vacation;