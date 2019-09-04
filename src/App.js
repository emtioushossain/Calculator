import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Display from './component/display.js'
import CalculatorButton from './component/button.js'
import {
    Button, Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Row
} from 'reactstrap';

class App extends Component {

  state = {
    calculation_result : '',
    new_cal : 'new_click'
  }

  buttonClick = value =>{

    if(value === '='){
        this.calculation()
    }

    else if(value === 'CLR')
        this.clear()
    else{
        this.getFullString(value)
    }

  }


 getFullString = input =>{
   this.setState({
       calculation_result : this.state.calculation_result + input ,
       new_cal : 'new_click'
   })
 }


  calculation = () => {

      var result = this.state.calculation_result

      try {
      this.setState({
        calculation_result:eval(result),
        new_cal : 'result_found'

      })

      }
      catch(e){
        this.setState({
          calculation_result:''

        })
      }


  }

  clear = () =>{
    this.setState({
      calculation_result:'',
      new_cal:'new_click'
    })

  }


  render() {

    const {calculation_result} = this.state ;
    const {new_cal} = this.state ;

    const borderCal = {


      backgroundColor:"white" ,
      padding:"10px 25px 10px",
      border:"1px solid gray ",
      marginTop :"13%"
    }

    return (

      <Container >
        <Row className ="calculator">
            <Col md="4"></Col>
            <Col style={borderCal} md="4">
              <Display calculation_result={calculation_result}/>
              <CalculatorButton  calculate = {this.buttonClick}/>
            </Col>
            <Col md="4"></Col>
        </Row>
      </Container>





    )
  }




}

export default App;
