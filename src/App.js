import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import styled from "styled-components";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const defaultState = {
  todos: [],
};

export const AppContext = createContext(defaultState);

export const funcktions = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETED: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    case funcktions.ADD_TODO:
      return { todos: [payload, ...state.todos] };
    case funcktions.DELETE_TODO:
      return { todos: state.todos.filter((todo) => todo.id !== payload) };
    case funcktions.COMPLETED:
      const completed = state.todos.map((elem) => {
        if (elem.id === action.payload.id) {
          return { ...elem, complete: !elem.complete };
        }
        return elem;
      });
      return { ...state, todos: completed };

    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <>
      <MainContainer>
    <InnreContainer >
<StyledTet> Todo: {state.todos.length}</StyledTet>
      
        
        <AppContext.Provider value={{ state, dispatch }}>
          <TodoForm />
          <TodoList />
        </AppContext.Provider>

    </InnreContainer>
          
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
display: flex;
justify-content: center;
text-align:center;
margin-top: 150px;
`
const StyledTet = styled.h1`
color:red;
font-weight:bold;
text-decoration:underline;
`
const InnreContainer = styled.div`
border: 9px double gold;
width: 600px;
border-radius:3px;
padding: 50px;
`