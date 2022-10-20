import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import nz from "./images/nz.png";
import is from "./images/is.png";
import au from "./images/au.png";
import fi from "./images/fi.png";
import dk from "./images/dk.png";
import fr from "./images/fr.png";
import ru from "./images/ru.png";
import id from "./images/id.png";
import pl from "./images/pl.png";
import no from "./images/no.png";
import nl from "./images/nl.png";
import se from "./images/se.png";
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
    let newBestScore=bestScore;
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
          if(bestScore<currentScore){
            newBestScore=currentScore;
          }
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
      bestScore: newBestScore,
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
          <img src={nz}></img><br></br>
          New Zealand 
        </div>
        <div id="element" onClick={this.select1}>
        <img src={ru}></img><br></br>
          Russia
        </div>
        <div id="element" onClick={this.select1}>
        <img src={fr}></img><br></br>
          France
        </div>
        <div id="element" onClick={this.select1}>
        <img src={fi}></img><br></br>
          Finland
        </div>
        <div id="element" onClick={this.select1}>
        <img src={no}></img><br></br>
          Norway
        </div>
        <div id="element" onClick={this.select1}>
        <img src={se}></img><br></br>
          Sweden
        </div>
        <div id="element" onClick={this.select1}>
        <img src={nl}></img><br></br>
          Netherlands
        </div>
        <div id="element" onClick={this.select1}>
        <img src={dk}></img><br></br>
          Denmark
        </div>
        <div id="element" onClick={this.select1}>
        <img src={pl}></img><br></br>
          Poland
        </div>
        <div id="element" onClick={this.select1}>
        <img src={is}></img><br></br>
          Iceland
        </div>
        <div id="element" onClick={this.select1}>
        <img src={au}></img><br></br>
          Australia
        </div>
        <div id="element" onClick={this.select1}>
        <img src={id}></img><br></br>
          Indonesia
        </div>
        
      </div>
      

      <button onClick={this.handleChange}>add</button>
      <Overview/>
      </div>
    );
  }
}

export default App;