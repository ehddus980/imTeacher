import './App.css';
import './static/fonts/font.css'
import button from 'react-bootstrap/Button';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ReactPlayer from 'react-player/lazy';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <span>계성고 1-8반 개인 공간!</span>
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
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>
      <img src={image5} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>

    
    <div className='playerName'>
    <span>보지마셈ㅋㅋ</span>
    </div>
            <div className='player'>
                <ReactPlayer
                    className='react-player'
                    url={'https://www.youtube.com/watch?v=XOQjIvF0Kps'}    // 플레이어 url
                    width='800px'         // 플레이어 크기 (가로)
                    height='500px'        // 플레이어 크기 (세로)     // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
                />
            </div>

    </div>
  );
}

export default App;
