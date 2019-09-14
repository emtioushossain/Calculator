import React , {Component} from 'react'
import { Container, Row, Col , Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import './display.css'

class Display extends Component{
  render(){
    return(

      <Row>
          <Col md="12" className="displayBox">
              <Input className="inputBox" value={this.props.input_value} />
              <Input className="resultBox" value={this.props.calculation_result} />
          </Col>
      </Row>

    )

  }

}


const mapStateToProps = state => ({
  calculation_result : state.final_result.calculated_value,
  input_value : state.final_result.input_value
})

export default connect(mapStateToProps)(Display) ;
