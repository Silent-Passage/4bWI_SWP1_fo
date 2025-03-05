import { useState } from "react";
import ItemList from "./components/item_list";
import Dropdown from "./components/dropdown";
import Versions from "./components/versions";

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
