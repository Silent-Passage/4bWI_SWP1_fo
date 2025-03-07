import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/list";
import Button from "./components/button";
import Card from "./components/card";

const list = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Pizza" },
  { id: 3, name: "Soft Drinks" },
  { id: 4, name: "Lasagne" },
];

const workers = [
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    description: "Architect & Engineer",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: 2,
    name: "Raphael",
    lastname: "Heim",
    description: "Software Engineer",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: 3,
    name: "David",
    lastname: "Bischof",
    description: "Jobless",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: 4,
    name: "Nils",
    lastname: "Miessgang",
    description: "Web-Developer",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: 5,
    name: "Jonas",
    lastname: "Muxel",
    description: "Physicst & Mathematician",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-2xl ml-2 mt-2">List</div>
      <List array={list} />
      <div className="text-2xl ml-2 mt-2">Button</div>
      <Button name={"Sendar"} />
      <div className="text-2xl ml-2 mt-2">Card</div>
      <Card workers={workers} />
    </>
  );
}

export default App;
