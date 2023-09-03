import { useEffect, useState } from "react";
interface arr {
  id: number;
}
export function MisionsFromServersF() {
  const [items, setItems] = useState<arr[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await result.json();
      setItems(data);
    };
    fetchItems();
  }, []);
  return <p></p>;
}
