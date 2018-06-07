import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
	const todoList = props.list.map(data => {
		return <li
					className="Task"
					key={data.idx}>
					{data.text} {data.id}
				</li>
	})
	return <ul className="Tasks">{todoList}</ul>;
};

export default TodoList;