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
    console.log(e);
    console.log("Selected: "+e.target.innerText);
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
        <div id="element">
          <div onClick={this.select1} className="name">New Zealand</div>
          <img src={nz}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Finland</div>
          <img src={fi}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Australia</div>
          <img src={au}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Netherlands</div>
          <img src={nl}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Norway</div>
          <img src={no}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Denmark</div>
          <img src={dk}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Russia</div>
          <img src={ru}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Poland</div>
          <img src={pl}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Indonesia</div>
          <img src={id}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Sweden</div>
          <img src={se}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">France</div>
          <img src={fr}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">Iceland</div>
          <img src={is}></img>
        </div>
        
        
      </div>
      

      
      
      </div>
    );
  }
}

export default App;