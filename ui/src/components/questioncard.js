import React, { Component } from 'react';
import {Card, Form, Row, Col, Button} from "react-bootstrap";


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
                   <Card.Title contenteditable="true" type="form">
                      <u>Untitled questionnaire</u>
                   </Card.Title>
                      <u contenteditable="true">Description</u>
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
                      <Card.Title id="title" contenteditable="true">
                         Multiple Question
                       </Card.Title>
                       <ul>
                         <li contenteditable="true">Option 1</li>
                         <li contenteditable="true">Option 2</li>
                         <li contenteditable="true">Option 3</li>
                         <Button>Add an Option</Button>
                       </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md>
                <Card clasName="mx-auto voice-prompt">
                    <Form>
                      <Form.Control placeholder="Short Answer? " />
                    </Form>
                </Card>
                </Col>
                </Row>




            </div>

        )
    }
}
