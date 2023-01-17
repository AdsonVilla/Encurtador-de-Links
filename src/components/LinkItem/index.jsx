import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

function LinkItem({ closeModal, content }) {
  async function copyToClipboard() {
    await navigator.clipboard.writeText(content.link);
    alert("Seu link foi copiado!");
  }
  return (
    <div className="modal">
      <div className="header">
        <h2>Link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={26} color="black" />
        </button>
      </div>

      <span>{content.long_url}</span>

      <button className="modal-link" onClick={copyToClipboard}>
        {content.link}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
}
export default LinkItem;
