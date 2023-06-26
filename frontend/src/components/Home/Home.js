import React from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <Container className="text-center py-5">
      <h1>Fyyur 🔥</h1>
      <p>Where musical artists meet musical venues.</p>

      <Row className="my-4">
        <Col>
          <h3>
            <Link to="/venues">
              <Button variant="primary" className="m-2">Find a venue</Button>
            </Link>
            <Link to="/venues/create">
              <Button variant="secondary" className="m-2">Post a venue</Button>
            </Link>
          </h3>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h3>
            <Link to="/artists">
              <Button variant="primary" className="m-2">Find an artist</Button>
            </Link>
            <Link to="/artists/create">
              <Button variant="secondary" className="m-2">Post an artist</Button>
            </Link>
          </h3>
        </Col>
      </Row>

      <p>Publicize about your show for free.</p>

      <Row className="my-4">
        <Col>
          <h3>
            <Link to="/shows/create">
              <Button variant="success" className="m-2">Post a show</Button>
            </Link>
          </h3>
        </Col>
      </Row>
    </Container>            
    )
}





{/* <Container>
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
  
        <BootstrapForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormControl
              type="text"
              onChange={handleChange}
              name="name"
              value={formData.name}
              required/>
          </FormGroup>
  
          <FormGroup>
            <FormLabel>City & State</FormLabel>
            <Row>
              <Col>
                <FormControl
                  type="text"
                  onChange={handleChange}
                  name="city"
                  value={formData.city}
                  required/>
              </Col>
  
              <Col>
                <FormControl as="select"
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
                </FormControl>
              </Col>
            </Row>
          </FormGroup>
  
          <FormGroup>
            <FormLabel htmlFor="address">Address</FormLabel>
            <FormControl
              type="text"
              onChange={handleChange}
              name="address"
              value={formData.address}
              required/>
          </FormGroup>
  
          <FormGroup>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <FormControl
              type="text"
              onChange={handleChange}
              name="phone"
              value={formData.phone}
              required/>
          </FormGroup>
  
          <FormGroup>
            <FormLabel htmlFor="genres">Genres</FormLabel>
            <FormControl 
              name="genres" 
              id="genres" 
              value={formData.genres}
              onChange={handleGenreChange}
              multiple
              required>
              <option value="Alternative">Alternative</option>
              <option value="Blues">Blues</option>
              <option value="Classical">Classical</option>
              <option value="Country">Country</option>
              <option value="Electronic">Electronic</option>
            </FormControl>
          </FormGroup>
  
          <FormGroup>
            <FormLabel htmlFor="facebook_link">Facebook Link</FormLabel>
            <FormControl
              type="text"
              onChange={handleChange}
              name="facebook_link"
              value={formData.facebook_link}/>
          </FormGroup>
  
          <FormGroup>
            <FormLabel htmlFor="image_link">Image Link</FormLabel>
            <FormControl
              type="text"
              onChange={handleChange}
              name="image_link"
              value={formData.image_link}/>
          </FormGroup>
  
          <FormGroup>
            <FormLabel htmlFor="website_link">Website Link</FormLabel>
            <FormControl
              type="text"
              onChange={handleChange}
              name="website"
              value={formData.website}/>
          </FormGroup>
  
          <FormGroup>
            <FormLabel htmlFor="seek */}