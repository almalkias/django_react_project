import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

export default function MyForm({ formType }) {
  const [formData, setFormData] = useState({
    name: "", 
    city: "", 
    state: "", 
    address: "", 
    phone: "",
    genres: [],
    facebook_link: "", 
    image_link: "", 
    website: "",
    seeking_talent: false, 
    seeking_venue: false,
    seeking_description: ""
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleGenreChange = (event) => {
    const selectedGenres = Array.from(event.target.selectedOptions, option => option.value);
    setFormData(prevFormData => ({ ...prevFormData, genres: selectedGenres }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    fetch(`http://127.0.0.1:8000/${formType}s/create/`, {
      method: 'POST',
      body: jsonData,
      headers: {
        'Content-Type': 'application/json'
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
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="custom-form-container">
          <h3>
            List a new {formType} 
            <Link to="/">
              <Button variant="outline-primary" title="Back to homepage">
                <i className="fa fa-home"></i>
              </Button>
            </Link>
          </h3>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl type="text" onChange={handleChange} name="name" value={formData.name} required />
            </FormGroup>
            <FormGroup>
              <FormLabel>City & State</FormLabel>
              <Row>
                <Col>
                  <FormControl type="text" onChange={handleChange} name="city" value={formData.city} required />
                </Col>
                <Col>
                  <FormControl as="select" id="state" value={formData.state} onChange={handleChange} name="state" required>
                    <option value="">Select a state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                  </FormControl>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="address">Address</FormLabel>
              <FormControl type="text" onChange={handleChange} name="address" value={formData.address} required />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormControl type="text" onChange={handleChange} name="phone" value={formData.phone} required />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="genres">Genres</FormLabel>
              <FormControl name="genres" id="genres" onChange={handleGenreChange} multiple required>
                <option value="Alternative">Alternative</option>
                <option value="Blues">Blues</option>
                <option value="Classical">Classical</option>
                <option value="Country">Country</option>
                <option value="Electronic">Electronic</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="facebook_link">Facebook Link</FormLabel>
              <FormControl type="text" onChange={handleChange} name="facebook_link" value={formData.facebook_link} />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="image_link">Image Link</FormLabel>
              <FormControl type="text" onChange={handleChange} name="image_link" value={formData.image_link} />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="website_link">Website Link</FormLabel>
              <FormControl type="text" onChange={handleChange} name="website" value={formData.website} />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Looking for {formType === 'venue' ? 'artist' : 'venue'}</FormLabel>
              <FormControl type="checkbox" name={formType === 'venue' ? 'seeking_talent' : 'seeking_venue'} checked={formData[formType === 'venue' ? 'seeking_talent' : 'seeking_venue']} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Seeking Description</FormLabel>
              <FormControl type="text" placeholder="Enter seeking description" name="seeking_description" value={formData.seeking_description} onChange={handleChange} />
            </FormGroup>
            <Button type="submit">Create {formType}</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}