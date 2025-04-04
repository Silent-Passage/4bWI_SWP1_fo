import React from "react";
import { Link, useLocation } from "react-router";

export default function List({ array }) {
  const location = useLocation;
  console.log(location);
  return (
    <>
      <ul>
        {array.map((i) => (
          <li
            className="bg-cyan-700 text-white p-5 m-2 w-35 hover:bg-cyan-900 hover:cursor-pointer"
            key={i.id}
          >
            {i.name}
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/card">Card</Link>
      </div>
    </>
  );
}
