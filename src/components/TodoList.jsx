import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import { funcktions } from "../App";

export const TodoList = () => {
  const {
    state: { todos },
    dispatch,
  } = useContext(AppContext);

  const handleDelete = (id) => () => {
    dispatch({
      type: funcktions.DELETE_TODO,
      payload: id,
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <StyledList key={todo.id}>
          {!todo.complete ? (
            <StyledCompleted>{todo.title}</StyledCompleted>
          ) : (
            <Uncompleted>{todo.title}</Uncompleted>
          )}
          <BtnContainer>
            <BtnStyle onClick={handleDelete(todo.id)}>delete</BtnStyle>
            <BtnStyle
              onClick={() =>
                dispatch({
                  type: funcktions.COMPLETED,
                  payload: { id: todo.id },
                })
              }
            >
              toggle
            </BtnStyle>
          </BtnContainer>
        </StyledList>
      ))}
    </ul>
  );
};

const StyledCompleted = styled.div`
  text-decoration: line-through;
  color: #3c4444;
  font-weight:bold;
`;

const Uncompleted = styled.div`
  color: red;
  font-weight: bold;
`;

const StyledList = styled.li`
  width: 400px;
  padding: 10px;
  background-color: gold;
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  margin-bottom:19px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const BtnStyle = styled.div`
  padding: 5px;
  border-radius: 5px;

  background-color: #d85deb;
  color: red;
  :hover {
    background-color: #def4f2;
  }
`;
