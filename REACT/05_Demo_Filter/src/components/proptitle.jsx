import { useEffect, useState } from "react";

export default function proptitle() {
  const [users, setUsers] = useState([]);
  const [bool, setActive] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <div
        className={
          bool
            ? "bg-blue-100 w-50 h-100 m-2 p-2"
            : "bg-red-100 w-50 h-100 m-2 p-2"
        }
      >
        <h1 className="mb-5">Props Title</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
      <button
        className="bg-gray-100 w-50 h-25 m-2"
        onClick={() => setActive(!bool)}
      >
        Toggle
      </button>
    </div>
  );
}
