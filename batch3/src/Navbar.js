import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <ul>
        <li>
         <Link to='/add'>Add </Link> 
        </li>
        <li> 
        <Link to='/multiply'> Multiply </Link>
        </li>
        <li>
        <Link to='/divide'>Divide </Link>
        </li>
        </ul>
    )
}