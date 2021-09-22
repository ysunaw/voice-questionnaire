import React, { Component } from 'react';
import {Card, Form, Row, Col} from "react-bootstrap";


export default class ShortAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {count : 0}
        this.handleAddingDivs = this.handleAddingDivs.bind(this)
    }


    handleAddingDivs() {
        this.setState({count: this.state.count + 1})
    }

    renderShortAnswer(){
        let count = this.state.count, uiItems = [];
        while(count--)
           uiItems.push(
               <div>
               <Row>
               <Col md>
                 <Card className="mx-auto screen-box">
                   <Card.Body>
                     <Card.Title>
                     <div contenteditable="true">
                        This text can be edited by the user.
                      </div>
                     </Card.Title>
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
        return uiItems;
    }

    render() {
        return (
            <div>
                {this.renderShortAnswer()}

                  <Button onClick="handleAddingDivs">Add Multiple Choice</Button>

            </div>
        )
    }
}
