import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

       return this.state.isLoggedIn &&  <div>Welcome Viswas</div>

      // Condtional operator
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Viswas</div> : <div>Welcome Guest</div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Viswas</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Viswas</div>

        // }
        // else{
        //     return <div>Welcome Guest</div>
        // }
        return (
            <div>
                <div>Welcome Viswas</div>
                <div>Welcome Guest</div>
            </div>
        )
    }
}

export default UserGreeting