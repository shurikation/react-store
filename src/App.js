import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

// import HomePage from '../src/pages/homepage/homepage.component.jsx';

const HomePage = (props) => {
	console.log(props)
	return (
		<div>
			<Link to='/topics'>Topics</Link> 
			<button onClick={() => props.history.push('/topics')}>Topics (same)</button>
			<h1>HOME PAGE</h1>
		</div>
	);
};

const TopicsList = (props) => {
	console.log(props)
	return (
		<div>
			<h1>TOPIC PAGE</h1>
			<Link to={`${props.match.url}/13`}>TO 13 TOPIC</Link>
			<Link to={`${props.match.url}/17`}>TO 17 TOPIC</Link>
			<Link to={`${props.match.url}/23`}>TO 23 TOPIC</Link>
		</div>
	)
}

const TopicsDetail = (props) => {
console.log(props); 
	return (
		<div>
			<h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
		</div>
	)
}

function App() {
	return (
		<div>
			<Route path='/' component={HomePage} />
			<Route exact path='/kek/kkkk/topics' component={TopicsList} />
			<Route path='/topics/:topicId' component={TopicsDetail} />
		</div>
	)
}

export default App;