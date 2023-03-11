import React, { ErrorInfo } from 'react';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

interface IErrorBoundary {
  children?: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  errors?: Error;
}
class ErrorBoundary extends React.Component<
  IErrorBoundary,
  IErrorBoundaryState
> {
  state = {
    hasError: false,
    errors: undefined,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(errors: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      errors: errors,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryFallback errors={this.state?.errors} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
