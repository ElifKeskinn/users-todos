import React from 'react';

async function fetchUsers() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  return data.users;
}

const UserList = async () => {
  const users = await fetchUsers();

  return (
    <div>
      <ul>
        {users.map(user => (
          <li  key={user.id}>
            <a className='usernameLink' href={`/user/${user.id}`}>{user.username}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
