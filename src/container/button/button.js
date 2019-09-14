import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import {
  receiveInput,
  calculateInput,
  clearInput,
  clearLastInput
} from '../../actions/index';
import {
  connect
} from 'react-redux';
import './button.css';

class CalculatorButton extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }

    this.inputChange = this.inputChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.clearChange = this.clearChange.bind(this);
    this.removeLastInput = this.removeLastInput.bind(this);

  }

  inputChange(e) {
    this.props.receiveInput(e.target.value)
  }

  calculateChange(e) {
    this.props.calculateInput(this.props.currentInput)
  }

  clearChange(e) {
    this.props.clearInput(this.state.input)
  }

  removeLastInput(e) {
    this.props.clearLastInput(e.target.value)
  }

  render(){
    return(
      <Row className="justify-content-md-center">
      <Col md="12">
      <Row>
      <Col className="blockProp" md="6" ><Button className="buttonProp" value="CLR" onClick={this.clearChange}>clear</Button></Col>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="backspace" onClick={this.removeLastInput}>rv</Button></Col>
      <Col className="blockProp" md="3" ><Button className="colorButtonProp" value="/" onClick={this.inputChange}>÷</Button></Col>
      </Row>
      <Row>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="7" onClick={this.inputChange}>7</Button></Col>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="8" onClick={this.inputChange}>8</Button></Col>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="9" onClick={this.inputChange}>9</Button></Col>
      <Col className="blockProp" md="3" ><Button className="colorButtonProp" value="-" onClick={this.inputChange}>-</Button></Col>
      </Row>
      <Row>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="4" onClick={this.inputChange}>4</Button></Col>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="5" onClick={this.inputChange}>5</Button></Col>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="6" onClick={this.inputChange}>6</Button></Col>
      <Col className="blockProp" md="3" ><Button className="colorButtonProp" value="+" onClick={this.inputChange}>+</Button></Col>
      </Row>
      <Row>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="1" onClick={this.inputChange}>1</Button></Col>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="2" onClick={this.inputChange}>2</Button></Col>
      <Col className="blockProp" md="3" ><Button className="buttonProp" value="3" onClick={this.inputChange}>3</Button></Col>
      <Col className="blockProp" md="3" ><Button className="colorButtonProp" value="=" onClick={this.calculateChange}>=</Button></Col>
      </Row>
      </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  currentInput: state.finalResult.inputValue
})

const mapDispatchToProps = {
  receiveInput,
  calculateInput,
  clearInput,
  clearLastInput
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorButton);
