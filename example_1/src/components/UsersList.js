import React from 'react'

function UsersList(props){
  let users = props.users;
  return (<ul>
  {users.map((user,index) => <li key={user.id}>{index + 1} - {user.name}</li>)}
  </ul>) ;
}

export default UsersList;