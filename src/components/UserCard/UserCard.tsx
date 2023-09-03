import { UsersFromServersF } from "../UsersFromServer/UsersFromServer"
import { MisionsFromServersF } from "../UsersFromServer/UsersFromServer"
import "./UserCard.css"
interface props{

    name:string
    email:string
}


export function Card(props:props){


    return(
        <div className="div">
        <p className="name" > {props.name}</p>
           <p className="email">{props.email}</p>
           <button className="button" onClick={MisionsFromServersF}>click here to show list from url addres</button>
        </div>
    )
}