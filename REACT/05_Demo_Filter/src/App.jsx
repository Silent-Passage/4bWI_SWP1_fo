import { useState } from "react";
import "./App.css";
import Proptitle from "./components/proptitle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Proptitle />
      </div>
    </>
  );
}

export default App;
