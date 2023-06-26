import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Venues() {

    const [venues, setVenues] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/venues/')
          .then(response => response.json())
          .then(data => {
              setVenues(data)
          })
          .catch(error => console.error(error));
      }, []);


    return (
        <div>
            {
                venues.map((venue, i) => {
                    return (
                        <div key={i}>
                            <h3>{ venue.city }, { venue.state }</h3>
                            <ul>
                            {
                            venue.venues_lst.map((obj, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={`/venues/${obj.id}`}>
                                            <i className="fas fa-music"></i>
                                            <div className="item">
                                                <h5>{ obj.name }</h5>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                            }
                            </ul>
                        </div>
                    )
                }
                    )
            }    
        </div>
        )
}






