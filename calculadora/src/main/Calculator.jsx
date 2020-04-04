import React, { Component } from 'react'

import './Calculator.css'
import Buttom from'../components/Buttom'
import Display from '../components/Display'


export default class Calculator extends Component {

    constructor(props){
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);
    }
    


    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }

    render(){
        
        /* menira de referenciar o this sem o construtor */
        /* const addDigit = (n) => this.addDigit(n);
        const setOperation = (n) => this.setOperation(n); */


        return(
            <div className="calculator">
                <Display value={100} />
                <Buttom label="AC" click={this.clearMemory} triple/>
                <Buttom label="/" click={this.setOperation} operation/>
                <Buttom label="7" click={this.addDigit}/>
                <Buttom label="8" click={this.addDigit}/>
                <Buttom label="9" click={this.addDigit}/>
                <Buttom label="*" click={this.setOperation} operation/>
                <Buttom label="4" click={this.addDigit}/>
                <Buttom label="5" click={this.addDigit}/>
                <Buttom label="6" click={this.addDigit}/>
                <Buttom label="-" click={this.setOperation} operation/>
                <Buttom label="1" click={this.addDigit}/>
                <Buttom label="2" click={this.addDigit}/>
                <Buttom label="3" click={this.addDigit}/>
                <Buttom label="+" click={this.setOperation} operation/>
                <Buttom label="0" click={this.addDigit} double/>
                <Buttom label="." click={this.addDigit}/>
                <Buttom label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}