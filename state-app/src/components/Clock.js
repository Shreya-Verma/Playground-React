import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      intervalId: 0,
    };

    this.handleClock = this.handleClock.bind(this);
  }

  componentWillUnmount() {
    if (this.state.intervalId) clearInterval(this.state.intervalId);
  }

  handleClock() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState((prevState) => {
        return {
          ...prevState,
          intervalId: 0,
        };
      });
      return;
    }

    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          time: new Date().toLocaleTimeString(),
        };
      });
    }, 1000);

    this.setState((prev) => {
      return {
        ...prev,
        intervalId: newIntervalId,
      };
    });
  }

  render() {
    return (
      <div className="Counter">
        <p className="clock">{this.state.time}</p>
        <section className="controls">
          <button onClick={this.handleClock}>
            {this.state.intervalId ? 'Stop' : 'Start'}
          </button>
        </section>
      </div>
    );
  }
}

export default Clock;
