import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Navbar bg="light" fixed="top" color="light" expand="xs">
          <Navbar.Brand href="#home">Voice Quatrics</Navbar.Brand>
            <Nav className="justify-content-right">
            <Button color="success" >Preview & send</Button>
            </Nav>
        </Navbar>
        <Container>   
        <Row className="question-list">
          <Col md>
          <h4>
            Screen Display
          </h4>
          <Card className="mx-auto screen-box">
            <Card.Body>
            <Card.Title>
              Untitled Questionnaire
            </Card.Title>
            <Card.Text>
              Description.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md>
        <h4>Voice Prompt</h4>
        <p>Welcome to untitled questionnaire. Description. Are you ready? </p>
        </Col>
        </Row>
        </Container>
        <Container fluid>
        <Row>
          <Card className="mx-auto" style={{ color: "#000"}} >
            <Card.Body>
            <Card.Title>
              Add a Question
            </Card.Title>
            </Card.Body>
          </Card>
        </Row>
        </Container>
      </header>
      </div>
  );
}

export default App;
