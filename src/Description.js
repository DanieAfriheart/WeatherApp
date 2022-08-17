import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { GrMapLocation } from 'react-icons/gr'

const Description = ({ weather, units }) => {
    const tempUnit = units === 'metric' ? '°C' : '°F'
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'

    return (
        <>
            <div className="px-md-5 px-3 d-flex flex-column justify-content-between">
                <Container className='px-0'>
                    <p className='fw-bold'>Weather Details</p>

                    <ul className="pt-4 px-0">
                        <li><span className='shade fw-bold'> Location</span> <span>{`${weather.name}, ${weather.country}`}</span></li>
                        <li><span className='shade fw-bold'>Description</span> <span>{`${weather.description}`}</span></li>
                        <li><span className='shade fw-bold'>Humidity</span> <span>{`${weather.humidity}`}%</span></li>
                        <li><span className='shade fw-bold'>Wind</span> <span>{`${weather.speed} ${windUnit}`}</span></li>
                        {/* <li><span className='shade fw-bold'>Rain</span> <span>8mm</span></li> */}
                    </ul>
                    <ul className="pt-4 px-0 border-top mt-5">
                        <li><span className='shade fw-bold'>Min</span> <span>{`${weather.temp_min} ${tempUnit}`}</span></li>
                        <li><span className='shade fw-bold'>Max</span> <span>{`${weather.temp_max} ${tempUnit}`}</span></li>
                        <li><span className='shade fw-bold'>Feels</span> <span>{`${weather.feels_like} ${tempUnit}`}</span></li>
                        <li><span className='shade fw-bold'>Pressure</span> <span>{`${weather.pressure} hPa`}</span></li>
                    </ul>
                </Container>
            </div>
        </>
    );
}

export default Description;