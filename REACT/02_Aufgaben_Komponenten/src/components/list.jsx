import React from "react";

export default function List({ array }) {
  return (
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
  );
}
