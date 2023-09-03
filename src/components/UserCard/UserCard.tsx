import { UsersFromServersF } from "../UsersFromServer/UsersFromServer"
// import { MisionsFromServersF } from "../UsersFromServer/UsersFromServer"
import "./UserCard.css"
import { useEffect, useState } from "react";
import { MisionsFromServersF } from "../ToDo/ToDo"
interface props{
    id:number
    name:string
    email:string
}


export function Card(props:props){
    const [showMissions, setShowMissions] = useState(false);
    const handleClick = () => {
        setShowMissions(!showMissions);
        // {showMissions && <MisionsFromServersF id={props.id} />}
      };
      console.log(props.id)
    return(
        <div className="div">
        {props.id}
        <p className="name" > {props.name}</p>
           <p className="email">{props.email}</p>
           <button className="button" onClick={handleClick}>click here to show list from url addres</button>
           <ul>
        {showMissions && (
          <li id="li">
            <MisionsFromServersF id={props.id} />
          </li>
        )}
      </ul>
        </div>
    )
}