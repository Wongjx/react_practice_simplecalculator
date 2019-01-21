import React, { Component } from 'react';
import './App.css';

import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeypadComponent';

class App extends Component {
    constructor(){
        super();
        this.state={
            result:""
        }
        this.onClick = this.onClick.bind(this);
    };
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result||""))||""
            })
            console.log(this.state.result);
        } catch(e){
            this.setState({
            result:"error"
            });
        }
    };
    reset= () => {
        this.setState({
            result: ""
        })
    };
    backspace= () => {
        this.setState({
            result: this.state.result.slice(0,-1)
        })
    };
    onClick = (key) => {
        if(key==="="){
            this.calculate();
        } else if (key === "C") {
            this.reset();
        } else if (key === "CE") {
            this.backspace();
        } else {
            this.setState({
                result: this.state.result + key
            })
        }
    };
    render() {
        return (
        <div>
            <div className="calculator-body">
                <h1> Simple Calculator </h1>
                <ResultComponent result={this.state.result}/>
                <KeyPadComponent onClick={this.onClick}/>
            </div>
        </div>
        );
    }
}

export default App;
