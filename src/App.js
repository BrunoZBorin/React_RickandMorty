import './App.css';
import axios from 'axios';
import React from 'react';
	
class App extends React.Component {
  state = {
    persons: []
  };
  componentDidMount(){
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
        console.log(this.state.persons)
      })
  } 

  render() {
    return (
    <div>
      <h1>Personagens Rick and Morty</h1>
      <ul>
        {
          this.state.persons
            .map(person =>
              <div key={person.id}>
                <li>{person.name}</li>
                <img src={person.image} />
              </div>

            )
        }
      </ul>
    </div>
    );
  }
}

export default App;
