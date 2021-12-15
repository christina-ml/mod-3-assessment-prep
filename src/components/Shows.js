import { Component } from "react";

class Shows extends Component {
    constructor(){
      super();
      this.state = {
          display: true,
          data: [],
      }
    }
  
    // Conditional Rendering
    // Fetching data - Display
    // Practice inputs - onClick, onSelect, onCheckbox
    // Storing different things ins tate: arrays, objects, booleans

    handleFetch=()=>{
        fetch("https://pursuit-tv-show.herokuapp.com/api/shows")
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
            })
    }

    handleShowHide=(e)=>{
        this.setState({
            display: e.target.checked,
        })
    }

    componentDidMount(){
        this.handleFetch();
    }

    render(){
      return(
        <div>
            <h1>Shows Page</h1>
            Show/Hide
            <input 
                type="checkbox" 
                onChange={this.handleShowHide}
                checked={this.state.display}
             />

            { this.state.display && 
                <div>Thing is shown</div>
            }

            { !this.state.display && 
                <div>Thing is hidden</div>
            }

        </div>
      )
    }
  }

export default Shows;