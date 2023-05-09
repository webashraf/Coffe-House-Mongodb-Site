import { useEffect, useState } from "react";
import CoffeCard from "../CoffeCard/CoffeCard";
// import CoffeCard from "../CoffeCard/CoffeCard";

const Coffee = () => {
  const [coffee, setCoffee] = useState([]);
  const [deleteCoffee, setDelateCoffee] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffee(data));
      setDelateCoffee(false);
  }, [deleteCoffee]);
  console.log(deleteCoffee);
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        {coffee.map((cof) => (
          <CoffeCard
            key={cof._id}
            coffee={cof}
            setDelateCoffee={setDelateCoffee}
          ></CoffeCard>
        ))}
      </div>
    </>
  );
};

export default Coffee;
