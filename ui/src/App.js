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
import { VolumeUp, CheckCircle, DesktopWindows, RecordVoiceOver, CompressOutlined } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { SayUtterance, SayButton } from 'react-say';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';




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
            Screen Display <DesktopWindows />
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
        <h4>Voice Prompt <RecordVoiceOver /> </h4>
        <p>What the Alexa Echo device will say to the user. </p>
        {/* <p>Welcome to untitled questionnaire. Description. Are you ready? </p> */}
              <p className="mx-auto voice-prompt"><u contentEditable="true" id="q-voice">Welcome to untitled questionnaire. Description. Are you ready?</u>
              {/*<SayButton onClick={ event => console.log(event)} speak={document.getElementById("q-voice").innerHTML}> <VolumeUp /> </SayButton>*/}
              <IconButton><VolumeUp /></IconButton> </p>
        </Col>

        </Row>
        <OneCard />
        {/*<QuestionCard/>*/}

  </div>
);


const Home = () => (

  <div className = "Home">
  <Navbar fixed="top" bg="light" expand="xs">
     <Navbar.Brand href="#">Voice Quatrics</Navbar.Brand>
       <Nav className="justify-content-right sidebar-sticky">
        <Button onClick={handlePreview} href="/preview">Preview & send</Button>
       </Nav>
   </Navbar>
  <Container fluid>
  <Row>
      <Col xs={3} id = "sidebar-wrapper">
        <Sidebar />
      </Col>
      <Col xs={9} id="page-content-wrapper">
        <SurveyQuestions className="main-content"/>
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
    <Container fluid="md">

    <PageView />
    </Container>


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
    <Container>
    <Card className="sent-card">
    <Card.Body>
      <CheckCircle color="success" className="success-icon add-space"/>
      <Card.Title className="add-space">Your questionnarie was successfully sent to Alexa.</Card.Title>
      <Card.Text>To access your questionnaire, say 'open {localStorage.getItem("main_title")}' to your Alexa device. </Card.Text>
    </Card.Body>
    </Card>
    </Container>
  </div>
);

function HandleSubmit() {
  var request = require('request');

  var url = "https://f3snh49py4.execute-api.us-east-1.amazonaws.com/post_survey/post_survey";

  var uuid = require('uuid');
  var date = new Date().toLocaleString();

  var requestData = {
    "userID":"amzn1.ask.account.AEMNRNKIASV72RLNT726RLNT6EDTTHZVNDEH7C5CFL6OHA6XFHAD7PBVKFSFGDG7KORVER7SCSIEYTDVMKK6YAUFF2DVRY5PGMUGM32NNOVALI33EIO76OMTMWXHPJN4ZAHXQOEAKAX7GEWGFXWZUU44KTLU5U2LED37VCGAQ6HYHKQCDIU6IOFB52CFYPCSAMH5TULF3NLUWZA",
    "questionTitle":localStorage.getItem("q_voice"),
    "questionText":localStorage.getItem("main_description"),
    "questionOptions": localStorage.getItem("q_option"),
    "questionType": localStorage.getItem("q_title"),
    "voiceOption": localStorage.getItem("main_voice"),
    "TimeStamp": date
  }

  console.log(requestData)
  var data = {
      url: url,
      json: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.parse(JSON.stringify(requestData))
  }

  request.post(data, function(error, httpResponse, body){
      console.log(body);
      console.log(httpResponse);
      if (error) {
        return console.log(error);
      }
      if (httpResponse.statusCode === 200)
          console.log(httpResponse.body);
          window.location.replace("/sent")


  });

};

export default App;
