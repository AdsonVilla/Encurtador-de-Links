import "./links.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links">
      <div className="title">
        <Link to="/">
          <FiArrowLeft size={30} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className="link-items">
        <button className="button-link">
          <FiLink size={18} color="#fff" />
          https://github.com/adsonvilla
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>

      <div className="link-items">
        <button className="button-link">
          <FiLink size={18} color="#fff" />
          https://github.com/adsonvilla
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>
    </div>
  );
}

export default Links;
