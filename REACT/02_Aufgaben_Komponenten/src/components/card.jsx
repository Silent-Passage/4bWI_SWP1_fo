import React, { useState } from "react";

export default function Card({ workers }) {
  return (
    <ul className="flex">
      {workers.map((i) => (
        <li key={i.id}>
          <div className="m-5 w-50 shadow-2xl rounded-xl">
            <img src={i.img} className="w-50 h-50 rounded-t-xl" />
            <div className="pl-2 pt-2 pb-1">{i.name}</div>
            <div className="pl-2 pb-5 ">{i.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
