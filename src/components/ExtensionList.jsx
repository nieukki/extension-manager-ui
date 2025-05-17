import { ExtensionCard } from "./ExtensionCard";
import { useState, useEffect } from "react";

const ExtensionList = ({ filter }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleExtension = (id) => {
    setData((prev) =>
      prev.map((object) =>
        object.id === id ? { ...object, isActive: !object.isActive } : object
      )
    );
  };

  const handleDeleteCard = (id) => {
    setData((prev) => prev.filter((object) => object.id !== id));
  };

  const filteredData = data.filter((object) => {
    if (filter === "all") return true;
    if (filter === "active") return object.isActive === true;
    if (filter === "inactive") return object.isActive === false;
  });

  return (
    <div className="w-3/4 grid grid-cols-3 gap-4 mb-20 max-sm:grid-cols-1 max-sm:w-11/12 max-xl:grid-cols-2">
      {filteredData.map((card) => (
        <ExtensionCard
          key={card.id}
          id={card.id}
          logo={card.logo}
          name={card.name}
          description={card.description}
          isActive={card.isActive}
          data={data}
          onToggle={toggleExtension}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
    </div>
  );
};

export default ExtensionList;
