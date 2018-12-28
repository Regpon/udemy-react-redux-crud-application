import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { increment, decrement } from '../actions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const props = this.props;
    
    return (
      <React.Fragment>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value });

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// 省略形でかける
const mapDispatchToProps = ({ increment, decrement });

export default connect(mapStateToProps, mapDispatchToProps)(App);