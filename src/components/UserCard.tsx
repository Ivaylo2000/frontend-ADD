import { User } from "../interfaces/User";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <li className="userCard" key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </li>
  );
};
