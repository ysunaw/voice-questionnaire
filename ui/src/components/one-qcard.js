import React, { Component } from 'react';
import {Card, Form, Row, Col, Button} from "react-bootstrap";

function pushRules(list){
     var rules = "";
     var li = document.createElement("li");
     var u = document.createElement("u")
     var rule = document.createTextNode("New option");
     li.appendChild(u);
     u.contentEditable = "true";
     u.appendChild(rule);


     var removeBtn = document.createElement("input");

     removeBtn.type = "button";
     removeBtn.value = "Remove";
     removeBtn.onclick = remove;
     li.appendChild(removeBtn);
     document.getElementById("mcq-option").appendChild(li);
 }

function remove(e) {
   var el = e.target;
   el.parentNode.remove();
 }

export default class OneCard extends Component {
    constructor(props) {
        super(props);
        this.state = {count : 0}
    }

    render() {
        return (
          <div>
          <Row>
          <Col md>
            <Card className="mx-auto screen-box">
              <Card.Body>
                <Card.Title id="mcq-title" contenteditable="true">
                   <u>Multiple Choice Question</u>
                 </Card.Title>

                 <ul id="mcq-option">
                   <li contenteditable="true" id="mc-option-1"><u>Option 1</u></li>
                  </ul>

                 <Button onClick={pushRules}>Add an Option</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
          <Card clasName="mx-auto voice-prompt">
            <u contentEditable="true" id="mcq-voice">Question?</u>

          </Card>


          </Col>
          </Row>
          </div>
        )
    }
}
