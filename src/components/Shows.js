import { Component } from "react";

class Shows extends Component {
    constructor(){
      super();
      this.state = {
          display: true,
      }
    }
  
    // Conditional Rendering
    // Fetching data - Display
    // Practice inputs - onClick, onSelect, onCheckbox
    // Storing different things ins tate: arrays, objects, booleans

    render(){
      return(
        <div>
            <h1>Shows Page</h1>
            { this.state.display && 
                <div>Thing to show/hide</div>
            }

        </div>
      )
    }
  }

export default Shows;