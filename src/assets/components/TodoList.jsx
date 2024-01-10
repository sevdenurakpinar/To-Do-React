// TodoApp.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const TodoApp = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Formun submit olmasını engelle
      addTodo();
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formTodo">
          <Form.Label>Hedef</Form.Label>
          <Form.Control
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            onKeyDown={handleKeyDown} // Enter tuşunu dinle
          />
        </Form.Group>
      </Form>

     

      <ListGroup>
        {todos.map((todo, index) => (
          <StyledListItem key={index} onClick={() => removeTodo(index)}>
            {todo}
          </StyledListItem>
        ))}
      </ListGroup>
    </div>
  );
};

const StyledListItem = styled(ListGroup.Item)`
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;



export default TodoApp;
