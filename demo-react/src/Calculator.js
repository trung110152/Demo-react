import {Component} from "react";
import {logDOM} from "@testing-library/react";

export default class Calculator extends Component{
    constructor() {
        super();
        this.state = {
            x:0,
            y:0,
            Result:0
        }
    }

    cong = ()=>{
        this.setState(state=>{
           state.Result = state.x + state.y;
            return state.Result
        })
    }

    tru = ()=>{
        this.setState(state=>{
            state.Result = state.x - state.y;
            return state.Result

        })


    }

    nhan = ()=>{
        this.setState(state=>{
            state.Result = state.x * state.y;
            return state.Result
        })


    }

    chia = ()=>{
        this.setState(state=>{
            if(state.y === 0){
                alert('Can not')
                return {
                    x:0,
                    y:0
                }
            }
            state.Result = state.x / state.y;
            return state.Result
        })
    }

    AC  = ()=>{
        this.setState(state=>{
            return {
                x:0,
                y:0,
                Result:0}
        })


    }

    render() {
        return(
        <>
            <input type="number" name={'x'} value={this.state.x} onChange={(e)=>{
                this.setState({
                    x: e.target.value *1
                })
            }} />
            <input type="text" name={'y'} value={this.state.y} onChange={(e)=>{
                this.setState({
                    y: e.target.value *1
                })
            }} />
            <hr/>
            <p>Result: {this.state.Result}</p>

            <div>
                <button onClick={this.cong}>+</button><button onClick={this.tru} >-</button><button onClick={this.nhan}>*</button><button onClick={this.chia}>/</button><button onClick={this.AC}>AC</button>
            </div>


        </>
    )}
}