import React, { useState } from "react";
import { Link } from "react-router";

export default function Card({ workers }) {
  const person = {
    id: 6,
    name: "Zeki",
    lastname: "Aksoy",
    description: "Freelancer",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  };
  return (
    <>
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
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/list" state={person}>
          List
        </Link>
      </div>
    </>
  );
}
