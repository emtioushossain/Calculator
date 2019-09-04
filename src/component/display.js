import React , {Component} from 'react'
import { Container, Row, Col , Button } from 'reactstrap';
import ReactDOM from 'react-dom';

class Display extends Component{
  render(){

    const { calculation_result } = this.props ;
    const displayBox = {
      width: "100%",
      textAlign: "right" ,
      height: "90px",
      border:"1px solid #c52755",
      backgroundColor: "#544C4A",
      color:"white",
      fontSize:"40px",
      fontWeight:"600",
      paddingRight: "10px"
    }

    return(

      <Row>
          <Col md="12" style={{padding: "0px"}} >
              <input style = {displayBox} value={calculation_result} />
          </Col>
      </Row>

    )

  }

}

export default Display ;
