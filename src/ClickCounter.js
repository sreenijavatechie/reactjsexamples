import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdatedComponent from './withCounter'
class ClickCounter extends Component {
   
    render() {
     //   const { count } = this.state
     const { count,incrementCount } = this.props
        return (
            <button onClick={incrementCount}>{this.props.name}
                Clicked {count} times
            </button>
        )
    }
}

export default withCounter(ClickCounter,5)
