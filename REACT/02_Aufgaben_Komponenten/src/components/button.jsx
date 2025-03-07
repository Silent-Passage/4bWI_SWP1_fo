import React, { useState } from "react";

export default function Button({ name }) {
  const [boolean, setBoolean] = useState(false);

  const Click = () => {
    setBoolean((boolean) => !boolean);
    console.log("Button:", boolean);
  };

  return (
    <div className="flex">
      <button
        className="bg-green-600 text-white p-3 m-2 w-25 focus:bg-green-600 active:bg-green-800"
        onClick={Click}
      >
        {name}
      </button>
      <div className="content-center ml-20">State: {boolean.toString()}</div>
    </div>
  );
}
