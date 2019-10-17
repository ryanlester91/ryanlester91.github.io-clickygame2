import React, {Component} from "react";
import Score from "./components/Score";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {

    state = {
      characters: characters,
      pickedChars: [],
      score: 0,
      alertMessage: ""
    }

    //componentDidMount(){

    //};
  
    handlePicked = event => {
  
      const name = event.target.attributes.getNamedItem("name").value;
      this.shuffleCharacters()
      this.checkGuess(name);
    }

    shuffleCharacters = () => {
        this.shuffleArray= {...this.state.characters}
        
  }

  shuffleArray = (arr) => {
    let currentIndex = arr.length, tempValue, randomIndex;
    //while there remain elements to shuffle
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //swap with current element
      tempValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempValue;
    }
    return console.log(arr);
  }
      
  
  
    /*const pickedChars = characters.filter(function(character) {
        return character.clicked = true;
      });
      
      console.log(characters);
      console.log(pickedChars);*/

      checkGuess = (name, cb) => {
        const newState = { ...this.state };
        if (newState.pickedChars.includes(name)) {
          newState.alertMessage = `YOU ALREADY PICKED "${name.toUpperCase()}"!`
          newState.pickedChars = []
          this.setState({newState})
        } else {
          newState.pickedChars.push(name)
          newState.alertMessage = `GOOD CHOICE!`
          this.setState({newState})
        }
        cb(newState, this.alertWinner)
      }

      alertWinner = (newState) => {
        if (newState.pickedChars.length === 12) {
          newState.alertMessage = "YOU DID IT, CHAMP!";
          newState.pickedChars = [];
          this.setState({newState})
        }
      }


render() {
  return(
    <div>
      <Wrapper>Clicky Game <Score>{this.score}</Score> <Alert>{this.alertMessage} </Alert></Wrapper>
      {this.state.characters.map(character => ( 
        <Card>
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              clicked={character.clicked}
        </Card>
      ))}
    </div>
  )};
  }

export default App;