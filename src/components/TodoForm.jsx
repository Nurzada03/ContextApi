
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import { funcktions } from "../App";




 export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
    
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTitle("");
    dispatch({
      type:  funcktions.ADD_TODO,
      payload: {
        id: Date.now(),
        title,
        complete:true
      },
    });
  };






  const handleEnter = (e) => {
    if (e.key === "Enter") handleEnter();
  };

  return (
    <form action="">
      <StyledInput
        type="text"
        placeholder="Enter title"
        onChange={handleChange}
        value={title}
        onKeyDown={handleEnter}
      />
      <StyledButton onClick={handleClick}>add</StyledButton>
    </form>
  );
};

const StyledInput = styled.input`
  width: 400px;
  padding: 10px;
  background-color: #a3dfda;
  border-radius: 10px;
  margin-bottom:20px;
  ::placeholder {
    color: red;
  }
  :hover {
    -webkit-box-shadow: -16px -9px 8px -2px rgba(34, 60, 80, 0.13);
    -moz-box-shadow: -16px -9px 8px -2px rgba(34, 60, 80, 0.13);
    box-shadow: -16px -9px 8px -2px rgba(34, 60, 80, 0.13);
    background-color:gold ;
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  width: 70px;
  background-color: #2d766f;
  color:red;
  :hover {
    background-color: #def4f2;
  }
`;