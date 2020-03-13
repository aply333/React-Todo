import React, {useState} from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const initialList = [];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor() {
    super();
    this.state = {
      list: initialList
    };
  }

  addHandler = addTask => {
    this.setState({
      list:[
        ...this.state.list,{
          task: addTask,
          completed:false,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    })
    console.log(this.state);
  };


  toggleCompleted = taskId => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          listItems={this.state.list}
          toggleCompleted={this.toggleCompleted}
          />
        <TodoForm 
        addHandler={this.addHandler}
        clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
