import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab'

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

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            value: { props.value }
          </CardContent>
          <CardActions>
            <Fab onClick={props.increment} color="primary">+1</Fab>
            <Fab onClick={props.decrement} color="secondary">-1</Fab>
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


export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(App);