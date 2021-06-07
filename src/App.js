import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// import HomePage from '../src/pages/homepage/homepage.component.jsx';

const HomePage = () => {
	return (
	<div>
		<h1>HOME PAGE</h1>
	</div>
	);
};

const TopicsList = () => {
	return (
		<div>
			<h1>TOPIC PAGE</h1>
		</div>
	)
}

const TopicsDetail = () => {
	return (
		<div>
			<h1>TOPIC DETAIL</h1>
		</div>
	)
}

function App() {
	return (
		<div>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/topics' component={TopicsList} />
			<Route path='/topics/:topicId' component={TopicsDetail} />
		</div>
	)
}

export default App;