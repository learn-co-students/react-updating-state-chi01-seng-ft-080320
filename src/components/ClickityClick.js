// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
      super();
   
      // Define the initial state:
      this.state = {
        count: 0
      };
    }
   
    // handleClick = () => {
    //   // Update our state here...
    //   this.setState({
    //       hasBeenClicked: true
    //   })
    // };

    handleClick = () => {
        this.setState(previousState => {
          return {
            count: previousState.count + 1
          }
        })
      }
   
    render() {
      return (
        <div>
          <p>I have {this.state.count} clicks!</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      );
    }
  }
   
  export default ClickityClick;