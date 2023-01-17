import "./menu.css";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <a className="icon" href="https://youtube.com">
        <BsYoutube size={24} color="#fff" />
      </a>
      <a className="icon" href="https://instagram.com">
        <BsInstagram size={24} color="#fff" />
      </a>
      <Link className="to-links" to="/links">
        Meus links
      </Link>
    </div>
  );
}
export default Menu;
