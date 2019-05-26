import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Grid from '@material-ui/core/Grid';
import InputField from "../component/inputField.js";
import Label from "../component/label.js"
import ButtonCtrl from "../component/button.js"
import "../style.css"
import moment from 'moment';



class BoxCon extends React.Component{
    
    constructor(){
        super();
        this.state = {
           correct: false,
           inputPassword: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.verify = this.verify.bind(this);
        
    }
    verified = false;
    handleChange(name, event){ 
        
        event.target.value.trim() === '' ? this.setState({[name]: ''}) : this.setState({[name]: event.target.value});
        console.log(this.state.inputPassword);
    }

    verify() { 
        this.props.verifyPassword({answer:this.state.inputPassword, hint: this.props.hint});
        this.verified = true;
    }

    componentDidMount() {
        this.props.loadPassword();
    }
    render(){
       
       
        if (this.props.response && !(this.props.response.correct)  && this.verified) { 
            let inputPasswordVal = this.state.inputPassword;
            this.props.response.highlight.forEach(function(item) {
                inputPasswordVal = inputPasswordVal.replace(item,`<span contenteditable="false" style="background-color: blue;">`+item+`</span>`);
           
          }); 
          this.verified = false;
          this.setState({inputPassword : inputPasswordVal});
        }
        
        return(
            <div className="container">
                <div className="row">
                    <Label text={this.props.hint}></Label>
                </div>
    <div className="row">
      
      <InputField  handleChange={this.handleChange} 
                                    name={'inputPassword'} 
                                    value={this.state.inputPassword}>
                    </InputField>
      
    </div>
    <div className="row">
      
    <ButtonCtrl text={'SUBMIT'} submit={this.verify}></ButtonCtrl>
      
      
    </div>
</div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
         
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);