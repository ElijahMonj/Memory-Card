import React, { Component,useEffect,useState } from "react";
import Overview from "./components/Overview";

import nz from "./images/nz.png";
import star from "./images/star.png";
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
import gh from "./images/gh.png";
class App extends Component {
 
  constructor() {
    super();

    this.state = {
      color: '',
      currentScore: 0,
      bestScore: 0,
      selected: [],
      country:[
        {name:'New Zealand',flag:nz},
        {name:'Russia',flag:ru},
        {name:'Iceland',flag:is},
        {name:'Sweden',flag:se},
        {name:'Netherlands',flag:nl},
        {name:'Poland',flag:pl},
        {name:'Denmark',flag:dk},
        {name:'Australia',flag:au},
        {name:'Finland',flag:fi},
        {name:'France',flag:fr},
        {name:'Indonesia',flag:id},
        {name:'Norway',flag:no},
      ]
    };
  }
  
  select1 = (e) => {
    const { currentScore, bestScore, selected, country } = this.state;
    console.log(e);
    console.log("Selected: "+e.target.innerText);
    console.log("Score: "+currentScore);
    console.log(selected);
    let newScore;
    let newSelected;
    let newBestScore=bestScore;
    let bol=true;
    let putStar='';
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
    let newCountry = country
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    console.log(bol)
    if(newScore==12){
      newScore=0;
      newBestScore=12;
      putStar=star;
      newSelected=[];
    }
    this.setState({
      color:putStar,
      currentScore: newScore,
      bestScore: newBestScore,
      selected: newSelected,
      country:newCountry,
    });
    
  };

  componentDidMount(){
    //console.log("Mounted");
    
  }
  componentDidUpdate(){
     
  }
  

  render() {
    const { currentScore, bestScore, country,color } = this.state;

    return (
      <div className="game">
      <header>Memory Game</header>
      <div className="subheading">Select a country, but never select it again.</div>
      <div className="scores">
      <p id="para">Your current Score: {currentScore}</p>
      <p>Your Best Score: {bestScore}<img src={color} className="star"></img></p>
      </div>
      
      <div className="grid">
        <div id="element">
          <div onClick={this.select1} className="name">{country[0].name}</div>
          <img src={country[0].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[1].name}</div>
          <img src={country[1].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[2].name}</div>
          <img src={country[2].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[3].name}</div>
          <img src={country[3].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[4].name}</div>
          <img src={country[4].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[5].name}</div>
          <img src={country[5].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[6].name}</div>
          <img src={country[6].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[7].name}</div>
          <img src={country[7].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[8].name}</div>
          <img src={country[8].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[9].name}</div>
          <img src={country[9].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[10].name}</div>
          <img src={country[10].flag}></img>
        </div>
        <div id="element">
          <div onClick={this.select1} className="name">{country[11].name}</div>
          <img src={country[11].flag}></img>
        </div>
        
      </div>
      <footer>
      
        <div>Copyrights 2022</div>
        <div className="myName">ElijahMonj</div>
        <a href="https://github.com/ElijahMonj/memory-card"><img src={gh} id="github"></img></a>
        
      
    </footer>
      </div>
    );
  }
}

export default App;