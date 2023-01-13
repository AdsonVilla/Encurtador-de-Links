import { FiLink } from "react-icons/fi";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="logo">
        <img src="/logo.png" alt="logo do Short Link" />
        <h1>Short Link</h1>
        <span>Encurte seu link aqui!</span>
      </div>

      <div className="input">
        <div>
          <FiLink size={24} color="#fff" />
          <input placeholder="Cole o link que deseja encurtar" />
        </div>
        <button>Gerar link</button>
      </div>
    </div>
  );
}

export default Home;
