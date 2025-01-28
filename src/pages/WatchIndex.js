import React, { useEffect, useState } from "react";
import { getWatches } from "../services/watchService";

function WatchIndex() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const fetchWatches = async () => {
      const data = await getWatches();
      setWatches(data);
    };

    fetchWatches();
  }, []);

  return (
    <div>
      <h1>Watch Index</h1>
      <ul>
        {watches.map((watch) => (
          <li key={watch.id}>
            <strong>{watch.model}</strong> - {watch.price} USD <br />
            Movement: {watch.movement} <br />
            Year of Production: {watch.year_of_production} <br />
            Case Material: {watch.case_material} <br />
            <em>{watch.description}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchIndex;
