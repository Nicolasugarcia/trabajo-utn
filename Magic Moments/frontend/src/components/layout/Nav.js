
import {Link} from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Disenios">Disenios</Link></li>
                    <li><Link to="/Combos">Combos</Link></li>
                    <li><Link to="/Lugare">Lugares</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>

                </ul>
            </div>
        </nav>
    );
}
export default Nav;