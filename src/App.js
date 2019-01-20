import React, { Component } from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Jumbotron from './components/Jumbotron';
import Content from "./components/Content"
import Card from "./components/Card";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  // Bringing in the cards.json and setting it's initial state
  state = {
    cards,
    rightWrong: "",
    score: 0,
    highscore: 0
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ 
        highscore : this.state.score,
        rightWrong: "Better luck next time ..."
      }, function (){
        console.log(this.state.highscore);
      })
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    // alert (`Game Over :( \n Score : ${this.state.score}`);
    this.setState({ score : 0 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if ( o.id === id ) {
        if ( cards[i].count === 0 ) {
          cards[i].count += 1
          this.setState({ score : this.state.score + 1 , rightWrong : "Nice job! Keep going!"}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 1);
          return true;
        } else if (this.state.score === 18) {
          this.setState({ rightWrong : "Winner Winner!"})
        }else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header rightWrong={this.state.rightWrong} score={this.state.score} highscore={this.state.highscore}/>
        <Jumbotron></Jumbotron>
        <Wrapper>
          <div className="instructions">
            <h4>Click on any member of the Aug 2018 bootcamp to earn a point, but don't click on the same picture more than once. Click all 18 pics, and you win.</h4>
          </div>
        <Content>
            {this.state.cards.map (card => (
              <Card  clickCount={this.clickCount} id={card.id} name={card.name} key={card.id} image={card.image} />
            ))}
        
        </Content>

        </Wrapper>
      </div>
    );
  }
}

export default App;
