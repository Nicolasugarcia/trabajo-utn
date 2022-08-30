import "../../styles/layout.css"
import {NavLink} from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/"className={({ isActive }) =>isActive ? "activo" : undefined}>Home</NavLink></li>
                    <li><NavLink to="disenios"className={({ isActive }) =>isActive ? "activo" : undefined}>Disenios</NavLink></li>
                    <li><NavLink to="Combos"className={({ isActive }) =>isActive ? "activo" : undefined}>Combos</NavLink></li>
                    <li><NavLink to="Lugare"className={({ isActive }) =>isActive ? "activo" : undefined}>Lugares</NavLink></li>
                    <li><NavLink to="Contacto"className={({ isActive }) =>isActive ? "activo" : undefined}>Contacto</NavLink></li>

                </ul>
            </div>
        </nav>
    );
}
export default Nav;