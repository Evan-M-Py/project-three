import React from 'react';
// stateless component
const Title = () => {
	return (
		<div id="titleWrapper" className="text-center mb-4">
			<h2 className="textCenter">To-do List</h2>
		</div>
	);
};
class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleNewTodoAddition = this.handleNewTodoAddition.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}
	
	handleNewTodoAddition() {
		if(this.input.value !== '') {
			this.props.addTodo(this.input.value);
			this.setState({
				value: ''
			});
			this.input.placeholder = "Add todo here...";
		}
	}
	
	render() {
		return (
			// ref should be passed a callback
			// with underlying dom element as its
			// argument to get its reference 
			<div id="form" className="row my-2 d-flex justify-content-center">
                <input 
                    className="form-control col-9"
					ref={node => {
						this.input = node;
					}}
					value={this.state.value}
					placeholder="Add todos here..."
					autocomplete="off"
					onChange={this.handleChange}
				/>
				<button className="btn btn-primary col-2 ml-2"
					onClick={this.handleNewTodoAddition}
				>	
					+
				</button>	
			</div>
		);
	}
}
const Todo = ({todo, remove}) => {
	// single todo 
	return (
		<p className="todos">
			{todo.value}
			<span 
				className="removeBtn float-right"
				onClick={()=> {
					remove(todo.id)
				}}>
				x
			</span>
		</p>
	);
};

const List = ({todos, remove}) => {
	let allTodos = [];
	
	if(todos.length > 0) {
		allTodos = todos.map(todo => {
			// passing todo and remove method reference
			return (<Todo todo={todo} remove={remove} />);
			//return (<p>{todo.value}</p>);
		});
	} else {
		allTodos.push(<h3 id="acu">All caught up!</h3>);	
	}
	
	return (
		<div id="list">
            <p id="info"> Your Todos: </p>
			{allTodos}
		</div>
	);
};
class ContainerForTodos extends React.Component {
	constructor(props) {
        super(props);
        const introData = [
			{
				id: -1,
				value: "Hover over todos and click on 'x' to delete them!"
			}
		];

		const localData = localStorage.todos && JSON.parse(localStorage.todos);

		this.state = { 
			data: localData || introData
		};
		
		// binding methods
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}
	// Handler to update localStorage
	updateLocalStorage() {
		if (typeof(Storage) !== "undefined")
			localStorage.todos = JSON.stringify(this.state.data);
	}
	// Handler to add todo
	addTodo(val) {
		let id;
		// if localStorage is available then increase localStorage count
		// else use global window object's id variable
		if (typeof(Storage) !== "undefined") {
			id = Number(localStorage.count);
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}
		
		const todo = { 
			value: val, 
			id: id 
		};
		
		this.state.data.push(todo);
		// update state
		this.setState({
			data: this.state.data
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	// Handler to remove todo
	removeTodo(id) {
		// filter out the todo that has to be removed
		const list = this.state.data.filter(todo => {
			if (todo.id !== id)
				return todo;
		});
		// update state
		this.setState({
			data: list
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	
	componentDidMount() {
		localStorage.clear();
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.todos) {
				localStorage.todos = JSON.stringify(this.state.data);
			}
			if(!localStorage.count) {
				localStorage.count = 0;
			}
		} else {
            console.log("%cApp will not remember todos created as LocalStorage Is Not Available");
			window.id = 0;
		}
	}
	
	render() {
		return (
			<div id="container" className="card col-3">
				<Title />
				<Form addTodo={this.addTodo} />
				<List todos={this.state.data} remove={this.removeTodo} />
			</div>
		);
	}
}
export default ContainerForTodos