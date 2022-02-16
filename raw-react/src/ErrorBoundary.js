// works only for class components
// as a lifecycle method "componentDidCatch" is used which is preesnt only in class components

import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{' '}
          to back to the home page or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
