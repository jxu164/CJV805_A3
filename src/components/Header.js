import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {


  return(
  
  <header>
    <div className="container">
      
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    
                    </li>

                    <li>
                        <Link to="/addVacation">Add Destination</Link>
                    </li>

                    <li>
                        <Link to="/Vacations">Resort Listing</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                </ul>
            </nav>
    </div>
</header>)
};

export default Header;
