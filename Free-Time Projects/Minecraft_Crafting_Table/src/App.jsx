import { useState } from "react";
import "./App.css";
import ItemList from "./components/item_list"; // Komponente richtig importieren

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Crafting</h1>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEUfgAIkggclbgEtmg1VRAZrP39xqBJ4ZymCvR3Wf/8YHwUfKQcgMAgiJgYnaRMpNQkrSgwsbBgteBYvMAgxNQk3gCA5PQ1XFhWkAAAACnRSTlMAAAAAAAAAAAAAc6AYaAAAAMRJREFUOI2d0dFuwiAUBuCPQp3G2ix7/2ds1MzZLl3xBo1eWXau+MNHOAdC67U+HV9yWAHSU+wE2XcliGV5MKATRQw2FWAR9IIRQbY1O2GzEiTZUhqMRluDXLbXgnu1tjIYJM1qsIAvnPVmjSg/j/kWzKKDFpNG1MiGculmFUhGjV4ScLF30pudK8C99mU0PNqsAxxkPxbd46lqQGfWWATXpyN1IGAS/w3YSS7l82rB1Q4folFrKrkGTHpEv/7QSI6FvAU3YDRpOf/weqAAAAAASUVORK5CYII=" />
      <ItemList />
    </>
  );
}

export default App;
