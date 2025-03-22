import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import CardData from "./Data/CardData";
import AddDocButton from "./addDocButton";

function Foreground() {
  const [initialPosition, setInitialPosition] = useState([]);
  
  const cardSize = {
    h: Math.floor(0.3 * window.innerHeight),
    w: Math.floor(0.11 * window.innerWidth),
  };


  useEffect(() => {
    const initialPositions = CardData.map((card, index) => ({
      id: card.id,
      x: 30 + index * (cardSize.w - 20),
      y: 30 + (index % 2 === 0 ? 50 : -50),
      delta: { x: 0, y: 0 },
    }));

    setInitialPosition(initialPositions);
  }, []);

  const constraintsRef = useRef(null);
  return (
    <div ref={constraintsRef} className="fixed top-3 left-3 w-[98%] h-[95%]">
      {CardData.map((data, index) =>
        initialPosition.length > 0 ? (
          <Card
            key={data.id}
            data={data}
            dragConstraint={constraintsRef}
            initialPosition={initialPosition[index]}
          />
        ) : null
      )}

    <AddDocButton />
      

      
      
    </div>
  );
}

export default Foreground;
