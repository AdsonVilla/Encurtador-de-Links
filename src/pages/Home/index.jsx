import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api";

function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);
      setLink("");
    } catch {
      alert("Desculpe o transtorno, parece que algo deu errado!");
      setLink("");
    }
  }

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
          <input
            placeholder="Cole o link que deseja encurtar"
            value={link}
            onChange={(ev) => setLink(ev.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Gerar link</button>
      </div>
      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}

export default Home;
