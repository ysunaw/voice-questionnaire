import React from "react";
import {Nav} from "react-bootstrap";
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
            <Nav.Item>
                Multiple Choice
            </Nav.Item>
            <Nav.Item>
                Grid Question
            </Nav.Item>
            <Nav.Item>
                Short Answer
            </Nav.Item>
            </Nav>

        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar
