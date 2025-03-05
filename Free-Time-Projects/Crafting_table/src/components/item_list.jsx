import React, { useEffect, useState } from "react";

export default function ItemList({ version }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!version) return;

    fetch(
      `https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/${version}/items.json`
    )
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      })
      .catch((error) => console.error("Error loading items:", error));
  }, [version]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} version={version} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, version }) {
  const [imageError, setImageError] = useState(false);

  return (
    <li>
      {item.displayName}
      {!imageError && (
        <img
          src={`https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/${version}/items/${item.name}.png`}
          className="image-pixelated w-50 h-50"
          onError={() => setImageError(true)}
          alt={item.displayName}
        />
      )}
    </li>
  );
}
