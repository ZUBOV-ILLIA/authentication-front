import { useEffect, useState } from "react";
import { userService } from "../api/users";
import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  email: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[] | []>([]);
  const navigate = useNavigate();

  useEffect(() => {
    userService
      .getUsersList()
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log(err);

        if (err.response.data === "Unauthorized") {
          navigate("/log-in");
        }
      });
  }, [navigate]);

  return (
    <div>
      {users.length > 0 && (
        <>
          <h3>Users List</h3>

          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
