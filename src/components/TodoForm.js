import React from "react";

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addTask: ""
        }
    };

    handleChanges = e => {
        this.setState({addTask: e.target.value});
    };

    handleAddTask = e => {
        e.preventDefault();
        this.props.addHandler(this.state.addTask);
    };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddTask}>
          <input
            type="text"
            name="task"
            placeholder="...todo"
            value={this.state.addTask}
            onChange={this.handleChanges}
          />
          <button >Add Todo</button>
        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </>
    );
  }
}

export default TodoForm;
