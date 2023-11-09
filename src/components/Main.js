import React, { Component } from 'react';
import './Main.css';

import Form from './Form';
import Task from './Task';

export default class Main extends Component {
  state = {
    newTask: ' ',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;

    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: ' ',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: newTasks,
        index: -1,
      });
    }
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index: index,
      newTask: tasks[index],
    });
  };
  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Task
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          tasks={tasks}
        />
      </div>
    );
  }
}
