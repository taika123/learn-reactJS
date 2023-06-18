import React, { useState } from "react";
import TodoList from "./TodoList/index.jsx";

function Todo() {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    // clone array of one array new
    const newTodoList = [...todoList];

    // console.log(todo, index);
    // toggle state
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    newTodoList[index] = newTodo;

    // update todo list
    setTodoList(newTodoList);
  };

  const handleShowALL = () => {
    setFilterStatus("all");
  };

  const handleShowCompleted = () => {
    setFilterStatus("completed");
  };

  const handleShowNew = () => {
    setFilterStatus("new");
  };

  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  // console.log(renderTodoList);
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <button onClick={handleShowALL}>Show All</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
      <button onClick={handleShowNew}>Show New </button>
    </div>
  );
}

export default Todo;
