import axios from "axios";
import { useEffect, useState } from "react";
import * as z from "zod"; // use * to import the entire namespace

// define Data schema using zod
const Data = z.object({
  name: z.string(),
});

type DataType = z.infer<typeof Data>;

interface User {
  name: string;
}

const Users = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = Data.array().parse(response.data); // use Data.array() instead of Data.parse()
        // Because we're parsing an array of users, not a single user.
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.name}>
            <h3>{user.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
