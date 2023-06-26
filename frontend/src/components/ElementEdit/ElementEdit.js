import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";


export default function ElementEdit({ formType }) {

    const { id } = useParams();  

    const [formData, setFormData] = React.useState({
        name: "", 
        city: "", 
        state: "", 
        address: "", 
        phone: "",
        genres: [],
        facebook_link: "", 
        image_link: "", 
        website: "",
        [formType === 'venue' ? 'seeking_talent' : 'seeking_venue']: false, 
        seeking_description: ""
    })

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/${formType}s/${id}/`)
          .then(response => response.json())
          .then(data => {
            setFormData(data)
          })
          .catch(error => console.error(error));
      }, []);

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleGenreChange = (event) => {
        const selectedGenres = Array.from(event.target.selectedOptions, option => {
        return option.value
        });
        setFormData({...formData, genres: selectedGenres});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const jsonData = JSON.stringify(formData);

        fetch(`http://127.0.0.1:8000/${formType}s/${id}/edit/`, {
        method: 'PUT',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
    };


    return (
        <div className="form-wrapper">
        <h3 className="form-heading">
            Edit a new {formType} 
            <Link to="/">
            <button title="Back to homepage">
                <i className="fa fa-home pull-right"></i>
            </button>
            </Link>
        </h3>
        <form onSubmit={handleSubmit}>

            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    required/>
            </div>

            <div className="form-group">
                <label>City & State</label>
                <div className="form-inline">
                <div className="form-group">
                    <input
                    type="text"
                    onChange={handleChange}
                    name="city"
                    value={formData.city}
                    required/>
                </div>

                <div className="form-group">
                    <select 
                        id="state" 
                        value={formData.state}
                        onChange={handleChange}
                        name="state"
                        required>

                        <option value="">Select a state</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                    </select>
                </div>
                </div>
            </div>

            <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
                    type="text"
                    onChange={handleChange}
                    name="address"
                    value={formData.address}
                    required/>

            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    required/>
            </div>

            <div className="form-group">
            <label htmlFor="genres">Genres</label>
            <small>Ctrl+Click to select multiple</small>
            <select 
                name="genres" 
                id="genres" 
                value={formData.genres}
                onChange={handleGenreChange}
                multiple
                required>
                <option value="Alternative">Alternative</option>
                <option value="Blues">Blues</option>
                <option value="classNameical">classNameical</option>
                <option value="Country">Country</option>
                <option value="Electronic">Electronic</option>
            </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="facebook_link">Facebook Link</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="facebook_link"
                    value={formData.facebook_link}/>
            </div>
            
            <div className="form-group">
                <label htmlFor="image_link">Image Link</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="image_link"
                    value={formData.image_link}/>
            </div>

            <div className="form-group">
                <label htmlFor="website_link">Website Link</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="website"
                    value={formData.website}/>
            </div>

            <div className="form-group">
                <label htmlFor="seeking_talent">Looking for {formType === 'venue'? 'artist' : 'venue'}</label>
                <input 
                    type="checkbox" 
                    id="seekingTalent" 
                    checked={formData.seeking_talent}
                    onChange={handleChange}
                    name="seeking_talent"
                />
            </div>

            <div className="form-group">
                <label htmlFor="seeking_description">Seeking Description</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="seeking_description"
                    value={formData.seeking_description}/>
            </div>
            <input type="submit" value={'Edit ' + formType} className="btn btn-primary btn-lg btn-block" />
        </form>
        </div>
        )
}


