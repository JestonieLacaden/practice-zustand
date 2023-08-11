import React from "react";
import AddTodo from "./AddTodo";
import { useTodoStore } from "../stores/useTodoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const ewan1 = useTodoStore((state) => state.ewans)
  return (
    <div className="container">
      <h1>Todo List w/ Zustand</h1>
          <AddTodo />
          <div className="todoList">
              {ewan1.length > 0 && ewan1.map((ewan, index) => (
                  <TodoItem key={index} todoItem={ewan} />
              ))}
          </div>
      </div>
  );
};

export default TodoList;
