import React, { useState } from "react";

function PlantCard({ plant, onUpdatePrice, onDeletePlant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [price, setPrice] = useState(plant.price);

  function toggleStock() {
    setIsSoldOut(!isSoldOut);
  }

  function handlePriceUpdate() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => onUpdatePrice(updatedPlant));
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => onDeletePlant(plant.id));
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${price}</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handlePriceUpdate}>Update Price</button>
      <button onClick={handleDelete}>Delete Plant</button>
      <button
        className={isSoldOut ? "primary sold-out" : "primary"}
        onClick={toggleStock}
      >
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
