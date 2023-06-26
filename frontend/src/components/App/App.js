import React from "react";
import { Navbar, Nav, Form as BootstrapForm, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from "../Form/Form";
import Home from "../Home/Home";
import Venues from "../Venues/Venues";
import Artists from "../Artists/Artists";
import ShowDetails from "../ShowDetails/ShowDetails";
import ElementEdit from "../ElementEdit/ElementEdit";

export default function App() {


  return (
    <Router>
      <div>
          <div>
          <Container className="d-flex align-items-center justify-content-between">
            <Button variant="light">
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </Button>
            <Link to="/" className="text-decoration-none text-dark">
              🔥
            </Link>
          </Container>


            <div>
              <ul>
                <li>
                  {/* {% if request.path == "/fyyur/venues/" or request.path == "/fyyur/show_venue/" or request.path == '/fyyur/search_venues' %} */}
                  <form  method="post" action="{% url 'search_venues' %}">
                    <input 
                      type="search"
                      name="search_term"
                      placeholder="Find a venue"
                      aria-label="Search" />
                  </form>
                  {/* {% endif %} */}
                  {/* {% if request.path == '/fyyur/artists/' or request.path == '/fyyur/search_artists/' or request.path == '/fyyur/show_artist/' %} */}
                  <form  method="post" action="{% url 'search_artists' %}">
                    <input 
                      type="search"
                      name="search_term"
                      placeholder="Find an artist"
                      aria-label="Search" />
                  </form>
                  {/* {% endif %} */}
                </li>
              </ul>
              <ul>
                <Link to="/venues"><li>Venues</li></Link>
                <Link to="/artists"><li>Artists</li></Link>                
                <li>Shows</li>
              </ul>
            </div>
          </div>






        <main id="content" role="main" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/venues/create" element={<Form formType="venue" />} />
            <Route path="/artists/create" element={<Form formType="artist" />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/venues/:id" element={<ShowDetails type='venues' />} />
            <Route path="/artists/:id" element={<ShowDetails type='artists' />} />

            <Route path="venues/:id/edit/" element={<ElementEdit formType='venue' />} />
            <Route path="artists/:id/edit/" element={<ElementEdit formType='artist' />} />
          </Routes>
        </main>




        <div id="footer">
          <div>
            <p>Fyyur &copy; All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </Router>  
  )
}

