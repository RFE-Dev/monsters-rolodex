import React, {Component} from 'react';
import {Cardlist} from "./components/card-list/card-list.component";
import {Searchbox} from "./components/search-box/search-box.component";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }
    handlechange = e => {this.setState({
        searchField: e.target.value,})
    };

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster=>
            monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <Searchbox
                    placeholder='search monsters'
                    handlechange = {this.handlechange}
                />
                <Cardlist monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
