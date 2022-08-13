import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <div className="App">
        <Container fluid className='bg' style={{ height: '100vh' }}>
          <Container fluid className='h-100 px-0'>
            <div className="row h-100">
              <Col md={8} className='p-5  d-flex justify-content-center flex-column'>
                <div>
                  <p>the.Weather</p>
                </div>
                <div className="align-items-end h-75 d-flex">
                  <div className="row">
                    <div className="col">
                      <h1 className='deg'>61*</h1>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} className='morph p-5'>
                lll
              </Col>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default App;
