import React from 'react';

const UserDetail = async ({ params }) => {
  const user = await fetchUser(params.id);
  const todos = await fetchUserTodos(params.id);


  async function fetchUser(id) {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await res.json();
    return data;
  }

  async function fetchUserTodos(id) {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}/todos`);
      if (!res.ok) {
        throw new Error('API çağrısında bir hata oluştu');
      }
      const data = await res.json();
      return data.todos || []; 
    } catch (error) {
      console.error('Todo verisi alınamadı:', error);
      return [];
    }
  }

  console.log('Fetched Todos:', todos);


  return (
    <div>
      <h1>{user.username}</h1>
      <p>Name: {user.firstName}</p>
      <p>Surname: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              disabled
              className={todo.completed ? 'green-checkbox' : ''}
            />
            <span className="todo-text">{todo.todo}</span>
            <span className="user-info">
              {todo.name}
              {todo.surname}
              {todo.email}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default UserDetail;
