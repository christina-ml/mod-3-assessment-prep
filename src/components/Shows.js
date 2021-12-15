import { Component } from "react";

class Shows extends Component {
    constructor(){
      super();
      this.state = {
          display: true,
          data: [],
          firstResult: {},
      }
    }
  
    // Conditional Rendering
    // Fetching data - Display
    // Practice inputs - onClick, onSelect, onCheckbox
    // Storing different things ins tate: arrays, objects, booleans

    handleFetch=()=>{
        fetch("https://pursuit-tv-show.herokuapp.com/api/shows")
            .then(res=>res.json())
            .then((allData)=>{
                // console.log(data);

                // can do all your logic in here, to do additional filtering if you want
                let filtered = allData.filter((show)=>{
                    return show.type === "TV Show" || show.type === "";
                })

                console.log(filtered);
                this.setState({
                    data: filtered,
                    firstResult: filtered[0],
                })
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
        let showElArr = this.state.data.map((show)=>{
            return (
                <div>{show.title}</div>
            )
        })

      return(
        <div>
            <h1>Shows Page</h1>
            
            <h3>First Result</h3>
            <div>
                { this.state.firstResult.title }
            </div>

            <h3>Shows</h3>
                { showElArr }




            <h3>Show/Hide</h3>
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