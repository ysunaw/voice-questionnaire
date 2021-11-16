import React, { Component } from 'react';
import {Card, Row, Col, Button, Container} from "react-bootstrap";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import { VolumeUp } from '@mui/icons-material';


function NextQuestion() {
  document.getElementById("preview-q").innerHTML = localStorage.getItem("q_title");
  document.getElementById("preview-des").innerHTML = localStorage.getItem("q_description");
  document.getElementById("preview-voice").innerHTML = localStorage.getItem("q_voice");
}

function PrevQuestion() {
  document.getElementById("preview-q").innerHTML = localStorage.getItem("main_title");
  document.getElementById("preview-des").innerHTML = localStorage.getItem("main_description");
  document.getElementById("preview-voice").innerHTML = localStorage.getItem("main_voice");
}

export default class OneCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Container fluid>
          <div>
          <h3>Preview</h3>

          <h4>Alexa Screen</h4>
          <Row md={12}>
          <Card className="screen-box" id="preview-screen-box">
            <p id="preview-q">{localStorage.getItem("main_title")} </p>
            <p id="preview-des">{localStorage.getItem("main_description")}</p>
          </Card>
          </Row>
          <Row md-12>
          <h4>Speech</h4>

          <Card className="speech-preview col-lg-12 d-flex align-items-stretch" id="">
            <p id="preview-voice">{localStorage.getItem("main_voice")} <IconButton><VolumeUp /></IconButton></p>


          </Card>
         <IconButton onClick={PrevQuestion}><ArrowBackIosIcon/></IconButton>
         <IconButton onClick={NextQuestion}><ArrowForwardIosIcon/></IconButton>
         </Row>
         </div>
         </Container>
        )
    }
}
