import './index.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div className='counter__outer'>
        <div className='counter'>
          {this.state.count}
        </div>
        <div className='btn__outer'>
          <button className='btn decrement' onClick={this.decrement}>-</button>
          <button className='btn increment' onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
  increment() {
    console.log("increment");
    this.setState({count: this.state.count + 1});
  }
  decrement() {
    this.setState({count: this.state.count - 1});
  }
}

export default App;
