import './App.css';
import './static/fonts/font.css'
import button from 'react-bootstrap/Button';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/1.jpg';
import image2 from './images/2.jpg'

function App() {


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <span>1-8반 개인 공간!</span>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <div className='slider'>
    <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
    
    
    </div>
  );
}

export default App;
