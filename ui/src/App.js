import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useReducer, useState} from "react";
import { Navbar, Nav, Container, Button, Row, Col, Card, Form } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Sidebar from "./components/sidebar.js"

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value

  }
 }


function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  //uncomment for submission of the form
  const handleSubmit = event => {
    console.log(event.target.value.toString())
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  return (
    <div className="App">

        <header className="App-header">
        <Main />
        </header>

      </div>

  );
}

/*      {submitting &&
       <div>
         You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div>
      }

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>*/

const Main = () => (
           <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/preview' component={Preview}></Route>
            <Route exact path='/sent' component={Sent}></Route>

           </Switch>
         );


const SurveyQuestions = () => (
  <div className="SurveyQuestions">
        <Row className="question-list">
          <Col md>
          <h4>
            Screen Display
          </h4>
          <p>How screen would look like on the Alexa Echo device.</p>
          <Card className="mx-auto screen-box">
            <Card.Body>
            <Card.Title>
            <Form>
            <Form.Group controlId="Title-Description">
            <Form.Control type="title" placeholder="Untitled questionniare"/>
            <Form.Control type="description" placeholder="Description" />
            </Form.Group>
            </Form>
            </Card.Title>
            {/* <Card.Text>
              Description
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md>
        <h4>Voice Prompt</h4>
        <p>What the Alexa Echo device will say to the user. </p>
        {/* <p>Welcome to untitled questionnaire. Description. Are you ready? </p> */}
        <Form>
            <Form.Control placeholder="Welcome to untitled questionnaire. Description. Are you ready?" />
            </Form>
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
  </div>
);


const Home = () => (

  <div className = "Home">
  <Container fluid>
    <Row>
    <Navbar fixed="top" bg="light" expand="xs">
      <Navbar.Brand href="#">Voice Quatrics</Navbar.Brand>
        <Nav className="justify-content-right sidebar-sticky">
         <Button href="/preview">Preview & send</Button>
        </Nav>
    </Navbar>
    </Row>
    <Row>
      <Col xs={2} id = "sidebar-wrapper">
        <Sidebar />
      </Col>
      <Col xs={10} id="page-content-wrapper">
        <SurveyQuestions />
      </Col>
    </Row>
  </Container>
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
     <Card className="mx-auto screen-box">
      <Card.Body>
      <Card.Title>
      <Form>
      <Form.Group controlId="Title-Description">
      <Form.Control type="title" placeholder="Untitled questionniare"/>
      <Form.Control type="description" placeholder="Description" />
      </Form.Group>
      </Form>
      </Card.Title>
      {/* <Card.Text>
        Description
        </Card.Text> */}
      </Card.Body>
    </Card>
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
