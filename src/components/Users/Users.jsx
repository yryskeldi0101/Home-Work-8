import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card/Card";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Card>
      <Userul>
        {users.map((user) => (
          <List key={user.id}>
            <First>{user.name}</First>
            <Second>{user.username}</Second>
            <Third>{user.email}</Third>
            <Fourth>{user.phone}</Fourth>
          </List>
        ))}
      </Userul>
      </Card>
  );
};

export default Users;

const Userul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 5px;
  text-align: center;
`;
const List = styled.li`
  padding: 10px;
  margin-top: 30px;
  width: 300px; 
`;
const First = styled.p`
  color: #a01da0;
  font-size: 20px;
`;
const Second = styled.p`
  color: #23aa17;
  font-size: 20px;
`;
const Third = styled.p`
  color: #0c02a0;
  font-size: 20px;
`;
const Fourth = styled.p`
  color: #d60850;
  font-size: 20px; 
`