import React from "react";

export default function card({name, jobtitle, description}) {
  return <div className="bg-gray-500 mb-5 flex gap-5">
  <p className="font-bold">{name}</p>
  <p className="text-white">{jobtitle}</p>
  <p className="underline">{description}</p>
  </div>;
}