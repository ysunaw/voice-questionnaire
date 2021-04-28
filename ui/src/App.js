import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar bg="light" fixed="top" color="light" expand="xs">
          <Navbar.Brand href="#home">Voice Quatrics</Navbar.Brand>

            <Nav className="justify-content-right">
            <Button id="preview-send" color="success" >Preview & send</Button>
            </Nav>
        </Navbar>
        
      </header>

    </div>
  );
}

export default App;
