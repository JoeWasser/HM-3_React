
import React, { Component } from "react";
import './App.module.css';
import styles from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            title: ""
        };
    }

    addTodo = (event) => {
        event.preventDefault();
        if (this.state.title.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                title: this.state.title,
                completed: false
            };
            console.log(newTodo);
            this.setState({
                todos: [...this.state.todos, newTodo],
                title: ""
            });
        }
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    render() {
        const { todos, title } = this.state;

        return (
            <div className={'container'}>
                <div>
                    <form onSubmit={this.addTodo} className={styles.form}>
                        <input
                            className={styles.input}
                            onChange={this.handleChange}
                            value={title}
                            placeholder={'enter title Todo:'}
                            type="text"
                        />
                        <button className={styles.btn}>Create ToDO</button>
                    </form>
                    {todos.map((todo) =>
                        <div key={todo.id} className={todo.completed
                            ? `${styles.todoCard} ${styles.done}`
                            : `${styles.todoCard} ${styles.done}`
                        }>
                            <span>{todo.title}</span>
                            <h2></h2>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
