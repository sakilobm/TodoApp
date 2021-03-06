import React from "react";
import Header from '../components/Header'
import ListItems from '../components/ListItems'

const Home = ({
	handleClearTodos,
	todos,
	setTodos,
	handleTriggerEdit }) => {

	return (
		<>
			<Header handleClearTodos={handleClearTodos} />
			<ListItems
				todos={todos}
				setTodos={setTodos}
				handleTriggerEdit={handleTriggerEdit} />
		</>
	);
};

export default Home;
