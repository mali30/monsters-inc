import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-component/search.component'

class App extends Component{
constructor(){
  super();

  // getting data from api then populating instead of hardcoding
  this.state = {
    monsters : [],
    searchField: ''
  }

  this.onChange = this.onChange.bind(this)
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(name => this.setState({monsters : name}))
}

onChange(event) {
  this.setState({searchField : event.target.value})

}

  render(){

    // same as saying const monsters = this.state.monsters
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className = "App">
        <h1> MONSTERS INC</h1>
        <SearchBox 
          placeholder = "search monsters"
          handleChange = {this.onChange}
        />
       
      <CardList monsters = {filteredMonsters} />
        
      </div>
    )
  }
}



export default App;
