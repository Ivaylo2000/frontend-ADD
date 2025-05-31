import React from "react";
import { User } from "../interfaces/User";
import { UserCard } from "./UserCard";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="userList">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
