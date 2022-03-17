import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const local = localStorage.getItem('counter');
  if (local) return JSON.parse(local);
  return { count: 0 };
};

class Counter extends Component {
  constructor(props) {
    super(props);
    // this.state = getStateFromLocalStorage();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.updateDocumentTitle = this.updateDocumentTitle.bind(this);
  }

  updateDocumentTitle() {
    document.title = `Count : ${this.state.count}`;
  }

  increment() {
    this.setState(
      (state, props) => {
        const { max, step } = props;
        console.log(state.count);
        if (state.count < max) return { count: state.count + step };
        else return;
      },
      () => {
        //// prints out the current state
        //localStorage.setItem('counter', JSON.stringify(this.state));
        //console.log('After', localStorage.getItem('counter'));
        console.log('After', this.state);
      }
    );
    console.log('Before', this.state);
  }

  decrement() {
    //changing document title after state change
    this.setState({ count: this.state.count - 1 }, this.updateDocumentTitle);
    //Since this.setState gets queued up , its an async function hence when doing a console.log, just after setting state,
    // it will return the old state
    console.log('In decrement', this.state);
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
