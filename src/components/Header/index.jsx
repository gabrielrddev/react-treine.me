import {Link} from "react-router-dom";
import './styles.css'


export function Header() {
    return (
    <>
<nav>
    <div><Link to='/' class='logo'>Treine.me</Link></div>
    <ul class='navbar'> 
        <li><Link to='/'class='navHome'>Home</Link></li>
        <li><Link to='/About' class='navSobre'>Sobre</Link></li>
        <li><Link to='/List' class='navTreinar'>Treinar</Link></li>
        <li><Link to='/Form' class='navTreinar' >Form</Link></li>
    </ul>
    </nav>
    </>
    )
}

