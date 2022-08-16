import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Watermark from "./Watermark";
import { getFormattedWeatherData } from './Weather';
// import Description from "./Description";

// Icon
// import { RiSunCloudyLine } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import { useEffect } from 'react';
import { useState } from 'react';
import Description from './Description';

function App() {
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')
  const [city, setCity] = useState("Lagos")

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units)
      setWeather(data)

      // console.log(data);

    };
    fetchWeatherData();
  }, [city]);

  const handleSearch = () => {
    if (handleSearch){
      setCity(e.locat.value)
    }
    // console.log(locat.value);
  }

  return (
    <>
      <div className="App">
        <Container fluid className='bg' style={{ height: '100vh' }}>
          {weather && (
            <Container fluid className='h-100 px-0'>
              <div className="row h-100">
                <Col md={8} className='p-5 '>

                  {/* Locationn Search */}
                  <div className="d-flex justify-content-between mb-3 px-md-5 col-12 col-md-6">
                    <input type="text" placeholder='Search location' className='p-1 w-100' id='locat' />
                    <Button className='bg-transparent border-0' onClick={handleSearch}><BsSearch /></Button>
                  </div>

                  <div className="align-items-end h-75 d-flex mt-5">
                    <div className="row d-flex flex-row align-items-center ps-5 col-md-6">
                      <div className="col-md-12">
                        <h1 className='deg'>{`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'} `}</h1>
                      </div>
                      <div className="col-8 h-100 d-flex flex-column">
                        <h2>{`${weather.name}, ${weather.country}`}</h2>
                        {/* <p>Lorem, ipsum.</p> */}
                        <p>{weather.description}</p>
                      </div>
                      <div className="col">
                        {/* <RiSunCloudyLine className='display-3' /> */}
                        <img className='img-fluid col-md-7' src={weather.iconURl} alt="" />
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={4} className='morph py-5'>
                  <Description weather={weather} units={units} />
                </Col>
              </div>

              <Watermark />

              {/* <descriptions weather={weather} units=(units) /> */}
            </Container>
          )}
        </Container>
      </div>
    </>
  );
}

export default App;
