import React,{Component}from 'react';
import CardArray from './CardArray';
import {robots} from './robots';
import SearchBox from './SearchBox';
import tachyons from 'tachyons';
import './App.css';
class  Apps extends Component{
	constructor(){
		super()
		this.state={
			robots:robots,
			searchfield:''
		}
	}
	OnSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		
	}
	render(){
		const filteredRobot=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	return(
		<div className='tc'>
		<h1>RoboFriends</h1>
		<SearchBox SearchChange={this.OnSearchChange}/>
		<CardArray robots={filteredRobot}/>
		</div>

		);
}

}
export default Apps;