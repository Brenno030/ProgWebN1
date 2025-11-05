import  {Link} from "react-router-dom";
import '../App.css';


function NavBar(){
 return (
    <div className="navbar">
        <Link to="/criarpost">Novo Post</Link>
        <Link to="/"> Home</Link>
    </div>
 )
}

export default NavBar;