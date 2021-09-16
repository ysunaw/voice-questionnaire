import React from "react";
import {Nav, Card, Form, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
//import '../pages/style/Dashboard.css'

const Side = props => {


    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <p> add a question by dragging it to the right.</p>
            <Card className="mx-auto sidebar-card">
             <Card.Body>
               <Card.Title>
                Multiple choice
               </Card.Title>
               <Card.Subtitle className="mb-2 text-muted">select one correct answer from options</Card.Subtitle>
               <Card.Text>

               <ul>
                 <li>Option 1</li>
                 <li>Option 2</li>
                 <li>Option 3</li>
               </ul>

               </Card.Text>
             </Card.Body>
           </Card>
           <Card className="mx-auto sidebar-card">
            <Card.Body>
              <Card.Title>Grid question</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">provide multiple rows and columns for labels and inputs</Card.Subtitle>
              <Card.Text>
                <Row>
                  <Col>  </Col>
                  <Col> Option 1 </Col>
                  <Col> Option 2 </Col>
               </Row>
               <Row>
               Question 1
               </Row>
               <Row>
               Question 2
               </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto sidebar-card">
           <Card.Body>
             <Card.Title>Short Answer</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">allow respondent to speak with free-form answers</Card.Subtitle>
             <Card.Text>
              <u>Short Answer</u>
             </Card.Text>
           </Card.Body>
         </Card>
            </Nav>

        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar
