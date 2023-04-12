import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import Quote from "./Quote";
import { Link } from "react-router-dom";
import ToDoCardList from "./ToDoCardList";
import Advice from "../Advice/Advice";

// Show page with list of todos from current user.
// This is routed to /todos

function ToDoList() {
  const { currentUser } = useContext(UserContext);

  console.debug(
    "ToDoList",
    "currentUser=",
    currentUser,
    "todos=",
    currentUser.todos,
    "todos.length =",
    currentUser.todos.length
  );

  return (
    <div className="ToDoList container text-center">
      <Quote />
      <div className="tasks">
        <div className="tasks-1">
          <h1>Tasks</h1>
          <Link className="button-4" to="/todo">
            Add task
          </Link>
        </div>
        {currentUser.todos.length ? (
          <ToDoCardList />
        ) : (
          <p className="lead mt-3">Start freeing up your mind.. =) </p>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
