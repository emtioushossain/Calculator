import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Display from './container/display/display.js'
import CalculatorButton from './container/button/button.js'


import {
  Button,
  Col,
  Container,
  Input,
  Row
} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Container >
      <Row>
      <Col md="4"></Col>
      <Col className="borderCal" md="4">
      <Display />
      <CalculatorButton />
      </Col>
      <Col md="4"></Col>
      </Row>
      </Container>

    )
  }

}

export default App ;
