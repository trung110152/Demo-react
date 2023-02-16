import {Component} from "react";

class S1 extends Component{
    constructor() {
        super();
        this.state = {
            list:[
                {
                    name:'Trung',
                    age:30
                }
            ],
            inpName:'',
            inpAge:'',
        }
    }

    change = (e)=>{
        // console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
    })
    }

    add = ()=>{
        this.setState((state)=>{
            return {
                list: [...state.list, {name:state.inpName, age: state.inpAge}],
                inpName:"",
                inpAge:'',
                ind:''

            }
        })
    }

    delete = (e)=>{
        this.setState(state => {
            state.list.splice(e.target.value,1)
            return [...state.list]
        })
    }

    showFormEdit = (e)=>{
        let id = e.target.value
        this.state.list.map((item,ind)=>{
            if(ind == id){
                this.setState({inpName:item.name})
                this.setState({inpAge:item.age})
                this.setState({ind:id})
            }
        })
    }

    edit = ()=>{
        this.setState((state)=>{
           state.list.map((item,ind)=>{
               if(ind == state.ind){
                   item.name = state.inpName
                   item.age = state.inpAge
               }
           })
            return{
               state,
                inpName:"",
                inpAge:''
           }
        })
    }


    render(){
        return(
            <>
                {this.state.list.map((item,ind)=>(
                    <>
                    <h2 key={ind}>{item.name}, {item.age}</h2>
                    <button  onClick={this.showFormEdit} value={ind}>Edit</button>
                    <button onClick={this.delete} value={ind}>Delete</button>
                    </>
                ))}

                <br/>

                <input type="text" name={'inpName'} value={this.state.inpName} onChange={this.change}/>

                <input type="text" name={'inpAge'} value={this.state.inpAge} onChange={this.change}/>

                <button onClick={this.add}>Add</button>
                <button onClick={this.edit} >Edit</button>
            </>
        )
    }
}

export default S1;