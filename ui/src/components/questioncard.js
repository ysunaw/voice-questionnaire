import React, { Component } from 'react';
import {Card, Form, Row, Col, Button} from "react-bootstrap";



function pushRules(list){
     var rules = "";
     var li = document.createElement("li");
     var rule = document.createTextNode("Option x");
     li.appendChild(rule);

     var removeBtn = document.createElement("input");
     removeBtn.type = "button";
     removeBtn.value = "Remove";
     removeBtn.onclick = remove;
     li.appendChild(removeBtn);
     document.getElementById("option-list").appendChild(li);
 }

function remove(e) {
   var el = e.target;
   el.parentNode.remove();
 }


export default class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {count : 0}
        this.handleAddingDivs = this.handleAddingDivs.bind(this)
    }


    handleAddingDivs() {
        this.setState({count: this.state.count + 1})
    }


    renderDivs(){
      let count = this.state.count, uiItems = [];
      while(count--)
         uiItems.push(
             <div>
             <Row>
             <Col md>
               <Card className="mx-auto screen-box">
                 <Card.Body>
                   <Card.Title contenteditable="true" type="form" id="q-title">
                      <u>Question</u>
                   </Card.Title>
                      <u contenteditable="true" id ="q-description">Description</u>
                 </Card.Body>
               </Card>
             </Col>
             <Col md>
             <Card clasName="mx-auto voice-prompt">
                 <Form>
                   <Form.Control placeholder="Welcome to untitled questionnaire. Description. Are you ready?" />
                 </Form>
             </Card>
             </Col>
             </Row>

             </div>
          )
      return uiItems;
    }
    render() {
        return (
            <div>
                {this.renderDivs()}
                <Row>
                  <Col>
                  <Card className="add-question" type="button" onClick={this.handleAddingDivs}>
                    <Card.Body>
                    <Card.Title>
                      Add a Question
                    </Card.Title>
                    </Card.Body>
                  </Card>
                  </Col>
                </Row>
                <Row>
                <Col md>
                  <Card className="mx-auto screen-box">
                    <Card.Body>
                      <Card.Title id="mc-title" contenteditable="true">
                         Multiple Choice Question title
                       </Card.Title>

                       <p id="demo-p"></p>
                       <ul id="option-list-one">
                         <li contenteditable="true" id="mc-option-1">Option 1</li>
                         <li contenteditable="true" id="mc-option-2">Option 2</li>
                        </ul>
                         <ul id="option-list"></ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md>
                <Card clasName="mx-auto voice-prompt">
                    <Form>
                      <Form.Control placeholder="Question?" />
                    </Form>
                </Card>


                </Col>
                </Row>
                </div>

        )
    }
}
