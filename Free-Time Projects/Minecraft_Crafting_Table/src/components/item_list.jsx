import React, { useEffect, useState } from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.21.4/items.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      })
      .catch((error) => console.error("Fehler beim Laden der API:", error));
  }, []);

  return (
    <div>
      <h2>Item Liste</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
