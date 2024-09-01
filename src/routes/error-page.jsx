import { useRouteError } from "react-router-dom";
import './styles.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="erroh1">Oops!</h1>
      <p className="errop">Desculpe pelo ocorrido mas sua pagina nao foi encontrada.</p>
      <p>
        <i className="erroi">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}