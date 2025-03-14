import React from "react";

export default function Card({ name, title, img }) {
  let imgWithRandom = img + "?random=" + Math.random(); //Cloudfare ist down
  return (
    <div className="border grid grid-cols-2 h-40">
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{title}</h4>
      </div>
      <div className="bg-green-400 w-full h-full overflow-hidden">
        <img
          src={imgWithRandom} //Cloudfare ist down
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
