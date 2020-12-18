import React from "react";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import store from './Redux/store';
import  TodoList from './components/TodoList';
function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList/>
    </Provider>
  );
}

export default App;
