//state can be changed within  the component
import React ,{Component} from 'react'
class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank You for subscribing'
        })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subsribe</button>
            </div>
        ) 
    }
}

export  default Message