import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePrice, onDeletePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onUpdatePrice={onUpdatePrice}
          onDeletePlant={onDeletePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
