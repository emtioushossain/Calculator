import React, {
  Component
} from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Input
} from 'reactstrap';
import ReactDOM from 'react-dom';
import {
  connect
} from 'react-redux';
import './display.css'

class Display extends Component {
  render() {
    return (

      <Row>
      <Col md="12" className="displayBox">
      <Input className="inputBox" value={this.props.inputValue} />
      <Input className="resultBox" value={this.props.calculationResult} />
      </Col>
      </Row>

    )

  }

}

const mapStateToProps = state => ({
  calculationResult: state.finalResult.calculatedValue,
  inputValue: state.finalResult.inputValue
})

export default connect(mapStateToProps)(Display);
