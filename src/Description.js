import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const Description = () => {
    return (
        <>
            <Container className='px-0'>
                <p className='fw-bold'>Weather Details</p>

                <ul className="pt-4 px-0">
                    <li><span className='shade fw-bold'>Cloudy</span> <span>86%</span></li>
                    <li><span className='shade fw-bold'>Humidity</span> <span>62%</span></li>
                    <li><span className='shade fw-bold'>Wind</span> <span>8Km/h</span></li>
                    <li><span className='shade fw-bold'>Rain</span> <span>8mm</span></li>
                </ul>
                <ul className="pt-4 px-0 border-top mt-5">
                    <li><span className='shade fw-bold'>Min</span> <span>11°C</span></li>
                    <li><span className='shade fw-bold'>Max</span> <span>16°C</span></li>
                    <li><span className='shade fw-bold'>Feels</span> <span>16°C</span></li>
                    <li><span className='shade fw-bold'>Pressure</span> <span>16°C</span></li>
                </ul>

            </Container>
        </>
    );
}

export default Description;