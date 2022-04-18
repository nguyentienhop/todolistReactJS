import "./App.css";
import Header from "./components/Header";
import { Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./event/AddTodo";
import DeleteAll from "./event/DeleteAll";
import Search from "./event/Search";
import Sort from "./event/Sort";
import axios from "axios";

function App() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isSort, setIsSort] = useState(false);
  const inputRef = useRef();

  //get all todo
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          "https://authencation.vercel.app/api/todo/list"
        );
        let data = response && response.data ? response.data : [];
        setTodoList(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  //change input
  const onChangeInput = useCallback((value) => {
    console.log("change");
    setTextInput(value);
  }, []);

  //add
  const handleAdd = (data) => {
    setTodoList([...todoList, data]);
    setTextInput("");
  };

  //delete
  const handleDelete = (id) => {
    let newTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList([...newTodo]);
  };

  //edit
  const handleEdit = (id, value) => {
    for (const todo of todoList) {
      if (todo.id === id) {
        todo.name = value;
      }
    }
    setTodoList([...todoList]);
  };

  //delete all
  const handleDeleteAll = () => {
    setTodoList([]);
  };

  //search
  const handleSearch = (value) => {
    let newTodo = todoList.filter((todo) => {
      return todo.name === value;
    });
    if (newTodo.length === 0) {
      alert("Todo not found");
      return;
    }
    setTodoList(newTodo);
  };

  //sort
  const handleSort = () => {
    if (!isSort) {
      todoList.sort((a, b) =>
        a.name.toUpperCase().localeCompare(b.name.toUpperCase())
      );
      setIsSort(true);
    } else {
      todoList.reverse();
      setIsSort(false);
    }
  };
  return (
    <>
      {console.log("render")}
      {console.log(textInput)}
      <Header />
      <Stack justifyContent="center" direction="row" spacing={5} margin={5}>
        <Box sx={{ flexGrow: 1 }} sm={8}>
          <TextField
            ref={inputRef}
            value={textInput}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder="Enter job"
            required
            fullWidth
            sx={{ height: 50 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
          sm={4}
        >
          <AddTodo handleAdd={handleAdd} name={textInput} />
          <DeleteAll handleDeleteAll={handleDeleteAll} />
          <Search handleSearch={handleSearch} />
          <Sort handleSort={handleSort} />
        </Box>
      </Stack>
      <TodoList
        todoList={todoList}
        onHandleDelete={handleDelete}
        onHandleEdit={handleEdit}
      />
    </>
  );
}

export default App;
