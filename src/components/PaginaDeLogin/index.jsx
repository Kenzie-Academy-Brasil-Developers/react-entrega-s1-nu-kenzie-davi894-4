import { ReactComponent as PaginaDeLogar } from "../../assents/svg/paginaDeLogar/illustration.svg";
import "./style.css";

const PaginaDeLogin = ({ setIsLoggedIn, isLoggedIn }) => {
  function logado() {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  }
  return (
    <main className="displayFlexLogar">
      <section className="sectionDisplayFlexLogar">
        <div className="PaginaDeLogar">
          <h1 className="h1PaginaLogin">
            <span className="Nu">Nu</span> kenzie
          </h1>

          <div className="descricaoPaginaLogin">
            <h2> Centralize o controle de suas finanças</h2>
          </div>
          <h3> de forma rápida e segura</h3>

          <button onClick={() => logado(isLoggedIn)} className="iniciar">
            iniciar
          </button>
        </div>
        <div>
          <PaginaDeLogar className="PaginaDeLogar" />
        </div>
      </section>
    </main>
  );
};

export default PaginaDeLogin;
