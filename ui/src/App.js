import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useReducer, useState} from "react";
import { Navbar, Nav, Container, Button, Row, Col, Card, Form } from 'react-bootstrap';
import { Switch, Route} from 'react-router-dom';
import Sidebar from "./components/sidebar.js";
// import QuestionCard from "./components/questioncard.js"
// import ShortAnswer from "./components/questioncard.js"
import OneCard from "./components/one-qcard.js"
import PageView from "./components/preview.js";
import { VolumeUp, CheckCircle } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import Speech from 'react-speech';




import { useDrag } from 'react-dnd'



const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value

  }
 }

function handlePreview() {
  // the function for putting the questioncard information to localstorage


  localStorage.setItem("main_title", document.getElementById("q-title").innerHTML)
  localStorage.setItem("main_description",document.getElementById("q-description").innerHTML)
  localStorage.setItem("main_voice", document.getElementById("q-voice").innerHTML)
  localStorage.setItem("q_title", document.getElementById("mcq-title").innerHTML)
  localStorage.setItem("q_option", document.getElementById("mcq-option").innerHTML)
  localStorage.setItem("q_voice", document.getElementById("mcq-voice").innerHTML)


  console.log(localStorage)
 };

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

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
        <Row className="question-list">
          <Col md>
          <h4>
            Screen Display
          </h4>
          <p>How screen would look like on the Alexa Echo device.</p>
          <Card className="screen-box">
              <Card.Body>
                <Card.Title type="form">
                   <u contenteditable="true" id="q-title">Untitled Questionnaire</u>
                </Card.Title>
                   <u contenteditable="true" id ="q-description">Description</u>
              </Card.Body>
          </Card>
        </Col>
        <Col md>
        <h4>Voice Prompt</h4>
        <p>What the Alexa Echo device will say to the user. </p>
        {/* <p>Welcome to untitled questionnaire. Description. Are you ready? </p> */}
        <Card clasName="mx-auto voice-prompt">
              <u contentEditable="true" id="q-voice">Welcome to untitled questionnaire. Description. Are you ready?" </u>
              <IconButton size="medium"><VolumeUp /></IconButton>
        </Card>
        </Col>

        </Row>
        <OneCard />
        {/*<QuestionCard/>*/}

  </div>
);


const Home = () => (

  <div className = "Home">
  <Container fluid classname="main-content">
  <Navbar fixed="top" bg="light" expand="xs">
     <Navbar.Brand href="#">Voice Quatrics</Navbar.Brand>
       <Nav className="justify-content-right sidebar-sticky">
        <Button onClick={handlePreview} href="/preview">Preview & send</Button>
       </Nav>
   </Navbar>
    <Row>
      <Col xs={3} id = "sidebar-wrapper">
        <Sidebar />
      </Col>
      <Col xs={9} id="page-content-wrapper">
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
          <Button color="success" onClick={HandleSubmit}>Send</Button>
          </Nav>
      </Navbar>
    <PageView />

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
      <CheckCircle color="success"/>
      <Card.Title>Your questionnarie is successfully sent to Alexa.</Card.Title>
      <Card.Text>To access your questionnaire, say '{localStorage.getItem("q-title")}' to your Alexa device. </Card.Text>
    </Card.Body>
    </Card>
  </div>
);

function HandleSubmit() {
  var request = require('request');

  var url = "https://h5de9isuhd.execute-api.us-east-2.amazonaws.com/qq";

  var requestData = {
    "qId":12947389025,
    "Options":localStorage.getItem("main_title"),
    "questionText":localStorage.getItem("main_description"),
    "questionType": "title"

  }

  console.log(requestData)
  var data = {
      url: url,
      json: true,
      body: JSON.parse(JSON.stringify(requestData))
  }

  request.post(data, function(error, httpResponse, body){
      console.log(body);
      if (httpResponse.statusCode === 200)
          window.location.replace("/sent")


  });

};

export default App;
