import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
 
  constructor() {
    super();

    this.state = {
      isInitiated: false,
      currentScore: 0,
      bestScore: 0,
      selected: [],
    };
  }
  
  select1 = (e) => {
    const { currentScore, bestScore, selected } = this.state;
    console.log("Selected: "+e.target.textContent);
    console.log("Score: "+currentScore);
    console.log(selected);
    let newScore;
    let newSelected;
    let bol=true;
    if(this.state.selected.length===0){
      newScore=currentScore+1;
      newSelected=selected.concat(e.target.textContent);
     
      console.log("Nice")
    }
   
      for(let i=0;i<selected.length;i++){
        if(selected[i]===e.target.textContent){
          newScore=0;
          newSelected=[];
          bol=false;
          console.log("You failed")
        }
      }

    if (bol===true){
        newScore=currentScore+1;
        newSelected=selected.concat(e.target.textContent);
        bol="3rd if";
        console.log("Nice")
    }
    console.log(bol)
    this.setState({
      currentScore: newScore,
      selected: newSelected,
    });
    
  };

  componentDidMount(){
    //console.log("Mounted");
    
  }
  componentDidUpdate(){
     
  }
  

  render() {
    const { currentScore, bestScore } = this.state;

    return (
      <div>
      <header>Memory Game</header>
      <div>Select an image, but never select it again.</div>
      <p id="para">Your current Score: {currentScore}</p>
      <p>Your Best Score: {bestScore}</p>
      <div className="grid">
        <div id="element" onClick={this.select1}>
        <div></div>
        Ayano
        </div>
        <div id="element" onClick={this.select1}>2</div>
        <div id="element" onClick={this.select1}>3</div>
        <div id="element" onClick={this.select1}>4</div>
      </div>
      

      <button onClick={this.handleChange}>add</button>
       
      </div>
    );
  }
}

export default App;