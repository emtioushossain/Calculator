import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import { Container, Row, Col , Button } from 'reactstrap';


class CalculatorButton extends Component{

  render(){

    const {calculate} = this.props

    const blockProp ={
      padding:"0px",
      border:"1px solid #c52755"
    }

    const buttonProp ={

      borderRadius: "0px",
      height: "60px",
      backgroundColor:"white",
      color:"#383737",
      fontSize:"30px",
      fontWeight:"600",
      textAlign:"center",
      border:"0px",
      paddingLeft: "0px",
      width:"100%"
    }


    const colorButtonProp ={

      borderRadius: "0px",
      height: "60px",
      backgroundColor:"#DE3163",
      color:"whote",
      fontSize:"35px",
      fontWeight:"600",
      textAlign:"center",
      border:"0px",
      padding: "0px",
      width:"100%"
    }

    return(
      <Row className="justify-content-md-center">
        <Col md="12">
            <Row>
                    <Col style={blockProp} md="9" ><Button style={buttonProp} value="CLR" onClick={ e => calculate(e.target.value)}>clear</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={colorButtonProp} value="/" onClick={ e => calculate(e.target.value)}>÷</Button></Col>
            </Row>
            <Row>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="7" onClick={ e => calculate(e.target.value)}>7</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="8" onClick={ e => calculate(e.target.value)}>8</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="9" onClick={ e => calculate(e.target.value)}>9</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={colorButtonProp} value="-" onClick={ e => calculate(e.target.value)}>-</Button></Col>


            </Row>
            <Row>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="4" onClick={ e => calculate(e.target.value)}>4</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="5" onClick={ e => calculate(e.target.value)}>5</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="6" onClick={ e => calculate(e.target.value)}>6</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={colorButtonProp} value="+" onClick={ e => calculate(e.target.value)}>+</Button></Col>
            </Row>
            <Row>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="1" onClick={ e => calculate(e.target.value)}>1</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="2" onClick={ e => calculate(e.target.value)}>2</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={buttonProp} value="3" onClick={ e => calculate(e.target.value)}>3</Button></Col>
                    <Col style={blockProp} md="3" ><Button style={colorButtonProp} value="=" onClick={ e => calculate(e.target.value)}>=</Button></Col>
            </Row>

        </Col>
      </Row>

    )

  }


}



export default CalculatorButton ;
