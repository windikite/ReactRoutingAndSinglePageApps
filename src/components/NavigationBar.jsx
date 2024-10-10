import { Link, NavLink } from "react-router-dom";

function NavigationBar(){
    return (
        <nav className="clearfix">
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/characters'>Characters</NavLink>
            <NavLink to='/comics'>Comics</NavLink>
        </nav>
    )
}

export default NavigationBar