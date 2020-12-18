import React from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
const TodoList = (props) => {
  console.log(props.todos);
  return (
    <div>
      <ul>
        {props.todos && props.todos.lenght ? (
          props.todos.map((row, index) => {
            return <Todo key={index} row={row}></Todo>;
          })
        ) : (
          <li>Nothing</li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.data,
  };
};

export default connect(mapStateToProps)(TodoList);
