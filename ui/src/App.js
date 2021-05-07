import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';
import { NavLink, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Main />
      </header>
      </div>
  );
}


const Main = () => (
           <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/preview' component={Preview}></Route>
            <Route exact path='/sent' component={Sent}></Route>

           </Switch>
         );

const SurveyQuestions = () => (
  <div className="SurveyQuestions">
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
        Description
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col md>
  <h4>Voice Prompt</h4>
  <p>Welcome to untitled questionnaire. Description. Are you ready? </p>
  </Col>
  </Row>
  <Row></Row>
  <Row>
    <Col>
    <Card className="add-question">
      <Card.Body>
      <Card.Title>
        Add a Question
      </Card.Title>
      </Card.Body>
    </Card>
    </Col>
  </Row>
  </Container>
  </div>
);

const Home = () => (

  <div className = "Home">
  <Navbar bg="light" fixed="top" color="light" expand="xs">
      <Navbar.Brand href="#">Voice Quatrics</Navbar.Brand>
        <Nav className="justify-content-right">
        <Button href="/preview" color="success" >Preview & send</Button>
        </Nav>
    </Navbar>
  <SurveyQuestions />
  </div>
);

const Preview = () => (
  <div className="preview">
      <Navbar bg="light" fixed="top" color="light" expand="xs">
        <Navbar.Brand href="#">Voice Quatrics</Navbar.Brand>
          <Nav className="justify-content-right">
          <Button href="/sent" color="success" >Send</Button>
          </Nav>
      </Navbar>
    <p>preview</p>
  </div>
);
const Sent = () => (
  <div className="sent">
    <Navbar bg="light" fixed="top" color="light" expand="xs">
      <Navbar.Brand href="#">Voice Quatrics</Navbar.Brand>
        <Nav className="justify-content-right">
        <Button href="/preview" color="success" >Back</Button>
        </Nav>
    </Navbar>
    <Card>
    <Card.Body>
      <Card.Title>Your questionnarie is successfully sent to Alexa.</Card.Title>
      <Card.Text>To access your questionnaire, say '' to your Alexa device. </Card.Text>
    </Card.Body>
    </Card>
  </div>
);
export default App;
