import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { increment, decrement } from '../actions'


const styles = {
  card: {
    margin: 48,
    height: 128
  },
};

class App extends Component {
  render() {
    const props = this.props;
    
    const classes = this.props.classes;
    console.log(classes);

    return (
      <React.Fragment>
        <Card className={classes.card}>
        <CardContent>
        <div>value: { props.value }</div>
        </CardContent>
        <CardActions>
        <Button onClick={props.increment}>+1</Button>
        <Button onClick={props.decrement}>-1</Button>
        </CardActions>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps, styles)(App);