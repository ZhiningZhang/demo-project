import React from "react";

//https://reactjs.org/docs/error-boundaries.html
//https://www.youtube.com/watch?v=ieOhZJbLptc&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=17


//A class component becomes an error boundary 
//if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() 
//or componentDidCatch(). 
//Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. 
//Use componentDidCatch() to log error information.

class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Error path
      return (
        <div>
          <h2>
            We are having Problems to Load your Preferred Addresses. Please
            Select...
          </h2>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default CustomErrorBoundary;
