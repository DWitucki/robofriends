import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			people: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		//fetch('https://swapi.co/api/people/')
			.then(response => response.json())
			.then(users => this.setState({people: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}


	render(){
		const { people, searchfield } = this.state;
		const filteredRobots = people.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !people.length ?
			<h1>Loading</h1> : (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>);
		}
}

export default App;