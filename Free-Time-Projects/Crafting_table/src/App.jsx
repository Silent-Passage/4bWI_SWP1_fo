import { useState } from "react";
import ItemList from "./components/item_list";
import Dropdown from "./components/dropdown";
import Versions from "./components/versions";
import MineRenderModel from "./components/MineRenderModel";

function App() {
  const [count, setCount] = useState(0);
  const [selectedVersion, setSelectedVersion] = useState("1.21.4");

  const handleVersionChange = (event) => {
    const version = event.target.value;
    setSelectedVersion(version);
    console.log("Selected version:", version);
  };

  return (
    <>
      <img
        src="https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.21.4/items/diamond_sword.png"
        alt="diamond sword"
        className="image-pixelated w-50 h-50"
      />
      <div>
        <h1>MineRender in React + Vite</h1>
        <MineRenderModel />
      </div>
      <div>
        <h1>Crafting</h1>
        <Dropdown setSelectedVersion={setSelectedVersion} />
        <p>Selected Version: {selectedVersion}</p>
        <ItemList version={selectedVersion} />
      </div>
    </>
  );
}

export default App;
