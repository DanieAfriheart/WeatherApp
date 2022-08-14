import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Icon
import { RiSunCloudyLine } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';

function App() {
  const { data, setData } = useState({})
  const { location, setLocation } = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3e8176791d433276933265775ccb00e5`

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data);
    })
  };

  return (
    <>
      <div className="App">
        <Container fluid className='bg' style={{ height: '100vh' }}>
          <Container fluid className='h-100 px-0'>
            <div className="row h-100">
              <Col md={8} className='p-5 d-flex justify-content-center flex-column'>
                <div className='ps-5'>
                  <p>the.Weather</p>
                </div>
                <div className="align-items-end h-75 d-flex">
                  <div className="row d-flex flex-row align-items-center ps-5">
                    <div className="col">
                      <h1 className='deg'>16°</h1>
                    </div>
                    <div className="col">
                      <h1>London</h1>
                      <p>Lorem, ipsum.</p>
                    </div>
                    <div className="col">
                      <RiSunCloudyLine className='display-3' />
                      <p>cloudy</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} className='morph py-5'>
                <div className="px-5 d-flex justify-content-between">
                  <input type="text" placeholder='Another location' className='p-1 w-100' />
                  <Button className='bg-transparent border-0' onClick={searchLocation}><BsSearch /></Button>
                </div>
                <div>
                  <ul>
                    {/* <li><Button>Birmingham</Button></li> */}
                  </ul>
                </div>
              </Col>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default App;
