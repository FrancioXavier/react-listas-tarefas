import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Task.css';

export default function Task({ tasks, handleDelete, handleEdit }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => {
                handleEdit(e, index);
              }}
            />
            <FaWindowClose
              className="delete"
              onClick={(e) => {
                handleDelete(e, index);
              }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Task.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
