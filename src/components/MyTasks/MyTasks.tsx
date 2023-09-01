import React, { useState, useEffect } from "react";
import "./MyTasks.css";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoTableProps {
  todos: Todo[];
  onEditTodo: (editedTodo: Todo) => void;
  cardClicked: (dataPassed: Todo) => void;
  onDeleteTodo: (todoId: number) => void;
  todoToggleComplete: (dataPassed: Todo) => void;
  cardDisplaySetter: (dataPassed: string) => void;
}

const MyTasks: React.FC<TodoTableProps> = ({
  todoToggleComplete,
  cardClicked,
  todos,
  onEditTodo,
  cardDisplaySetter,
  onDeleteTodo,
}) => {
  const togglecomplete = (data: Todo) => {
    const updatedData = { ...data, completed: !data.completed };
    todoToggleComplete(updatedData);
  };

  const detailsClicked = (todo: Todo) => {
    cardDisplaySetter("delete");
    cardClicked(todo);
  };

  return (
    <section className="my-tasks">
      <h3>My Task</h3>

      <div className="tasklists">
        {todos.map((todo, index) => (
          <div key={todo.id} className="task-card">
            <div className="card-left">
              <div className="checkbox" onClick={() => togglecomplete(todo)}>
                <img
                  src="/images/tick.png"
                  style={{ display: todo.completed ? "block" : "none" }}
                />
              </div>

              <div
                className={`task-details ${todo.completed && "marked-class"}`}
                onClick={() => detailsClicked(todo)}
              >
                <h4> {todo.title}</h4>
                <p>12.30pm - 1.30pm</p>
              </div>
            </div>

            <p>Today</p>
          </div>
        ))}
      
      </div>
     
    </section>
  );
};

export default MyTasks;
