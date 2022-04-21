import React,{useState,useEffect} from 'react';
import Vacation from './Vacation';
import { Link } from 'react-router-dom';
import image2 from '../assets/img/resort2.jpg';

const ResortItem = ({id, hotelName, price, resortType, description, houseRules, location}) => {

  const [vacations, setVacations] = useState([]);
  
  useEffect(()=>{

    fetch(`http://localhost:8080/Vacations/${id}`)
    .then(res =>res.json())
    .then(data =>{
        setVacations(data)
        console.log(data);
    })
    .catch(err=>console.log(`Error: ${err}`))
  }, [])

  return  (

    <div className="resort-card">

      <Link to = {`/Vacations/${id}`}> 
          <img src={image2} alt=""/>   
      </Link> 

    <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          
          {vacations.map(vacation=>( <Vacation key={vacation.id} 
          hotelName={vacation.hotelName} 
          location = {vacation.location} 
          resortType ={vacation.resortType} 
          price={vacation.price} 
          description = {vacation.description} 
          houseRules = {vacation.houseRules} 
          amenities = {vacation.amenities}/>) )}
          
          </div>
    */

      <div className="resortContent">
          <h3>{hotelName} </h3>
          <p> {location} </p>
          <p> ${price} per night </p>
          <p> {description} </p>
          <p> {houseRules} </p>
          <p> Type:{resortType} </p>
      </div>

  </div>

  );
};

export default ResortItem;
