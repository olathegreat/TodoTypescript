import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import logo from "./logo.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import CallToAction from "./components/CallToAction/CallToAction";
import TimeLine from "./components/Timeline/TimeLine";
import MyTasks from "./components/MyTasks/MyTasks";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";
import AddTaskCard from "./components/AddTaskCard/AddTaskCard";
import EditTaskCard from "./components/EditTask/EditTaskCard";
import DeleteTaskCard from "./components/DeleteTask/DeleteTaskCard";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const App: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());

  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [todosPerPage] = useState<number>(10);
  const [todoClicked, setTodoClicked] = useState<Todo>({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  });

  const [cardDisplay, setCardDisplay] = useState<string>("calendar");

  const cardClicked = (data: Todo) => {
    setTodoClicked(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([newTodo, ...todos]);
    console.log([newTodo, ...todos]);
  };

  const cardDisplaySetter = (dataPassed: string) => {
    setCardDisplay(dataPassed);
  };

  const handleEditTodo = (editedTodo: Todo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const toggleTodoComplete = (editedTodo: Todo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  console.log(currentTodos);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Nav />

      {/* call to action section */}

      <CallToAction cardDisplaySetter={cardDisplaySetter} />

      {/* section for todo tasks */}

      <main className="todo-main">
        <section className="section-main-left">
          <TimeLine />

          <MyTasks
            todos={currentTodos}
            onEditTodo={handleEditTodo}
            todoToggleComplete={toggleTodoComplete}
            cardClicked={cardClicked}
            onDeleteTodo={handleDeleteTodo}
            cardDisplaySetter={cardDisplaySetter}
          />
          <hr></hr>
          <Pagination
            todosPerPage={todosPerPage}
            totalTodos={todos.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </section>

        <aside>
          {cardDisplay === "calendar" && (
            <Calendar onChange={onChange} value={value} />
          )}

          {cardDisplay === "add" && (
            <AddTaskCard
              cardDisplaySetter={cardDisplaySetter}
              handleAddTodo={handleAddTodo}
              todos={todos}
            />
          )}

          {cardDisplay === "edit" && (
            <EditTaskCard
              cardDisplaySetter={cardDisplaySetter}
              handleEditTodo={handleEditTodo}
              todoClicked={todoClicked}
            />
          )}

          {cardDisplay === "delete" && (
            <DeleteTaskCard
              cardDisplaySetter={cardDisplaySetter}
              todoClicked={todoClicked}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </aside>
      </main>
    </div>
  );
};

export default App;
