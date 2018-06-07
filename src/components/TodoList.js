import React from 'react';

const TodoList = (props) => {
	const todoList = props.list.map(data => {
		return <li key={data.id}>{data.text} {data.id}</li>
	})
	return <ul>{todoList}</ul>;
};

export default TodoList;