import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Description = () => {
    return (
        <>
            <Container className='my-5 px-5'>
                <Row className='gap-5'>
                    <Col className='p-4 morph'>1 of 3</Col>
                    <Col className='p-4 morph'>2 of 3</Col>
                    <Col className='p-4 morph'>3 of 3</Col>
                </Row>
            </Container>
        </>
    );
}

export default Description;