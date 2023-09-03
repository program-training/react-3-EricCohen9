import { useEffect, useState } from "react";
interface props {
  id: number;

}
export function MisionsFromServersF(props:props) {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${props.id}`);
      const data = await result.json();
      setItems(data);
      console.log(props.id)

    };
    fetchItems();

  }, []);
  if(items.length>0){
  return(
    <div>
    <p>{items[0].title}</p>
    <p>{items[1].title}</p>
    <p>{items[2].title}</p>
    <p>{items[3].title}</p>
    <p>{items[4].title}</p>
    <p>{items[5].title}</p>
    </div>
  );
  }
}
