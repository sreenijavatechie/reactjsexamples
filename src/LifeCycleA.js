import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Viswas'
    }
    console.log('LifeCycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null
  }

  //Invoked immediatelyafter a component and all its children components have been rendered to the DOM
  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution'
    })
  }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA
