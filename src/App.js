import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Watermark from "./Watermark";
import { getFormattedWeatherData } from './Weather';
import Description from "./Description";

// Icon
// import { RiSunCloudyLine } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import { useEffect } from 'react';

function App() {


  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData("Japan")
      
      console.log(data);
    };
    fetchWeatherData();
  }, []);



  return (
    <>
      <div className="App">
        <Container fluid className='bg' style={{ height: '100vh' }}>
          <Container fluid className='h-100 px-0'>
            <div className="row h-100">
              <Col md={8} className='p-5 '>

                {/* Locationn Search */}
                <div className="d-flex justify-content-between mb-3 px-md-5 col-12 col-md-6">
                  <input type="text" placeholder='Search location' className='p-1 w-100' />
                  <Button className='bg-transparent border-0'><BsSearch /></Button>
                </div>

                <div className="align-items-end h-75 d-flex mt-5">
                  <div className="row d-flex flex-row align-items-center ps-5">
                    <div className="col">
                      <h1 className='deg'>16°</h1>
                    </div>
                    <div className="col">
                      <h1>London</h1>
                      <p>Lorem, ipsum.</p>
                    </div>
                    <div className="col">
                      {/* <RiSunCloudyLine className='display-3' /> */}
                      <img className='img-fluid col-md-7' src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
                      <p>cloudy</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={4} className='morph py-5'>
                <div className="px-md-5 px-3 d-flex flex-column justify-content-between">
                  <Description />
                </div>
              </Col>
            </div>

            <Watermark />

          </Container>
        </Container>
      </div>
    </>
  );
}

export default App;
