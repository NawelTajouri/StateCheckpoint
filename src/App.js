import React, { Component } from "react";
import './App.css';


import Myimage from './cv.jpg';
import Thecounter from "./Thecounter";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show: true,
      count: 0,
      Person: {
        fullName : "TAJOURI Nawel",
        bio : "I just like Photography",
        imgSrc : Myimage,
        profession : "futur developper"
      },
    };
    
  }


  handleshow = () => {
    this.setState({ show: !this.state.show });
    if (this.state.show) {
      clearInterval(this.int);
      this.setState({count: 0});
    } else {
      this.int = setInterval(() => {
        this.setState({count: this.state.count + 1})
      }, 1000);
      
    }
  };

  render() {
    return (
      <>
      <div className="App">
        <button className="Mybtn" onClick={this.handleshow}>
          {" "}
          {this.state.show ? "Hide" : "Show counter"}
        </button>
        
        <div>
        {this.state.show ? <div> 
          {this.state.count}
          <div className="MyProfile">
            <Thecounter />
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img className="Myimage" src={this.state.Person.imgSrc} alt="ItiZMe"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
        </div>

        </div> : 
        "Click To View My Profile"
        }
        </div>
      </div>
        

        

     </> 
    );
  }
}

export default App;
