import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Artists() {

    const [artists, setArtists] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/artists/')
          .then(response => response.json())
          .then(data => {
              setArtists(data)
          })
          .catch(error => console.error(error));
      }, []);


    return (
        <div>
            <ul className="items">
                {
                    artists.map((artist, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/artists/${artist.id}`}>
                                    <i className="fas fa-users"></i>
                                    <div className="item">
                                        <h5>{ artist.name }</h5>
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