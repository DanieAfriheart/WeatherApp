import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

const Watermark = () => {
    // const Link = 'https://linkedln.com/daniel-esuola';

    return (
        <>
            <Container fluid className='fixed-bottom pb-3'>
                <Col className='text-end mx-auto col-11'><p className='small'>Designed by <a href="https://linkedln.com/daniel-esuola" className='text-light text-decoration-none'> Esuola Daniel</a></p></Col>
            </Container>
        </>
    );
}

export default Watermark;