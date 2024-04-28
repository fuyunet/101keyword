import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./components/ui/button";

type Fruit = {
  id: number;
  name: string;
  icon: string;
};

function App() {
  const [fruits, setFruits] = useState<Fruit[]>([
    { id: 0, name: "", icon: "" },
  ]);

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:8080");
      console.log(data.data);
      console.log(data.data[0]);
      setFruits(data.data);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-slate-400">
      <Button>Testing</Button>
      {fruits.map((fruit) => (
        <p key={fruit.id}>
          <span>{fruit.name}</span>
          <span>{fruit.icon}</span>
        </p>
      ))}
    </div>
  );
}

export default App;
