import { useEffect, useState } from "react";
import "./UsersFromServer";
import { Card } from "../UserCard/UserCard";
import "./UsersFromServer.css";
interface arr {
  id: number;
  name: string;
  username: string;
  email: string;
}
export function UsersFromServersF() {
  const [items, setItems] = useState<arr[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      setItems(data);
    };
    fetchItems();
  }, []);
  return (
    // <ul>
    //     {items.map(item => <li key={item.id}>{item.name}  {item.email}</li>)}

    // </ul>
    <div className="div">
      {items.map((item) => (
        <Card key={item.id} name={item.name} email={item.email} />
      ))}
    </div>
  );
}
