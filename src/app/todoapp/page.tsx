"use client";
import React, { useState, useRef } from "react";

type TodoList = {
  task: string;
  completed: boolean;
};

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  const [currentTask, setCurrentTask] = useState<string>("");

  const inputTask = useRef<HTMLInputElement>(null);

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }]);
    if (inputTask.current) {
      inputTask.current.value = "";
    }
  };

  const removeTask = (todo: string) => {
    const updateTodoList = todoList.filter((item) => item.task !== todo);
    setTodoList(updateTodoList);
  };

  const completedTask = (todo: TodoList) => {
    const updateTodoList = todoList.map((item) => {
      if (item.task === todo.task) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(updateTodoList);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Task..."
          ref={inputTask}
          onChange={(event) => setCurrentTask(event.target.value)}
          style={{
            margin: 10,
            width: 300,
            height: 40,
            fontSize: 18,
            paddingLeft: 10,
          }}
        ></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul
        style={{
          display: "flex",
          padding: 0,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {todoList.map((todo, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <li
              style={{
                width: "300px",
                height: "40px",
                backgroundColor: "#00df6c",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {todo.task}
            </li>
            <button
              style={{ marginLeft: "10px", height: "40px" }}
              onClick={() => completedTask(todo)}
            >
              Completed
            </button>
            <button
              style={{ marginLeft: "10px", height: "40px" }}
              onClick={() => removeTask(todo.task)}
            >
              X
            </button>
            <h1>
              {todo.completed
                ? "The task is Complete"
                : "The task is not completed"}
            </h1>
          </div>
        ))}
      </ul>
    </div>
  );
}
