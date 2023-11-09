import React, { Component } from 'react';
import './Main.css';

//Form
import { FaPlus } from 'react-icons/fa';

//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: ' ',
    Tasks: ['Fazer café', 'beber água', 'Estudar'],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };
  render() {
    const { newTask, Tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tasks</h1>
        <form action="#" className="form">
          <input type="text" onChange={this.handleChange} value={newTask} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {Tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
