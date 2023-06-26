import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

export default function ShowDetails({ type }) {

    const [object, setObject] = useState({});
    const { id } = useParams();  
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/${type}/${id}/`)
          .then(response => response.json())
          .then(data => {
              setObject(data)
          })
          .catch(error => console.error(error));
      }, []);

    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <h1 className="monospace">
                        {object.name}
                    </h1>
                    <p className="subtitle">
                        ID: {object.id}
                    </p>
                    <div className="genres">
                    {
                        object.genres?.map((genre, i) => (
                            <span key={i} className="genre">{genre}</span>
                    ))}
                    </div>
                    <p>
                        <i className="fas fa-globe-americas"></i> {object.city}, {object.state}
                    </p>
                    <p>
                        <i className="fas fa-map-marker"></i> {object.address ? object.address : 'No Address'}
                    </p>
                    <p>
                        <i className="fas fa-phone-alt"></i> {object.phone ? object.phone : 'No Phone'}
                    </p>
                    <p>
                        <i className="fas fa-link"></i> {object.website ? <a href={object.website} target="_blank">{object.website}</a> : 'No Website'}
                    </p>
                    <p>
                        <i className="fab fa-facebook-f"></i> {object.facebook_link ? <a href={object.facebook_link} target="_blank">{object.facebook_link}</a> : 'No Facebook Link'}
                    </p>
                    {object.seeking_talent ? (
                        <div className="seeking">
                            <p className="lead">Currently seeking talent</p>
                            <div className="description">
                                <i className="fas fa-quote-left"></i> {object.seeking_description} <i className="fas fa-quote-right"></i>
                            </div>
                        </div>
                    ) : (
                        <p className="not-seeking">
                            <i className="fas fa-moon"></i> Not currently seeking talent
                        </p>
                    )}
                </div>
                <div className="col-sm-6">
                    <img src={object.image_link} alt="Venue Image" />
                </div>
            </div>
            {/* <section>
                <h2 className="monospace">{venue.upcoming_shows_count} Upcoming {venue.upcoming_shows_count === 1 ? 'Show' : 'Shows'}</h2>
                <div className="row">
                    {venue.upcoming_shows.map(show => (
                        <div className="col-sm-4">
                            <div className="tile tile-show">
                                <img src={show.artist_image_link} alt="Show Artist Image" />
                                <h5><a href={`/artists/${show.artist_id}`}>{show.artist_name}</a></h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
            {/* <section>
                <h2 className="monospace">{venue.past_shows_count} Past {venue.past_shows_count === 1 ? 'Show' : 'Shows'}</h2>
                <div className="row">
                    {venue.past_shows.map(show => (
                        <div className="col-sm-4">
                            <div className="tile tile-show">
                                <img src={show.artist_image_link} alt="Show Artist Image" />
                                <h5><a href={`/artists/${show.artist_id}`}>{show.artist_name}</a></h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            <Link to={`/venues/${object.id}/edit`}>
                <button className="btn btn-primary btn-lg">Edit</button>
            </Link>

            <Link to={`/venues/${object.id}/delete`}>
                <button className="btn btn-primary btn-lg">Delete</button>
            </Link>
        </div>
    )
}



