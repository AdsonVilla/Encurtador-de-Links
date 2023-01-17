import "./error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <img src="404-error.png" />

      <h1>Página não encontrada!</h1>
      <Link to="/"> Voltar para a home</Link>
    </div>
  );
}
export default Error;
