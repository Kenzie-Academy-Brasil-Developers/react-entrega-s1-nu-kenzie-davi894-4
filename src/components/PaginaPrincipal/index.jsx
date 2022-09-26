import Form from "../Form";
import List from "../List";
import { useState } from "react";
import TotalMoney from "../TotalMoney";
import "./style.css";

const PaginaPrincipal = ({ setIsLoggedIn, isLoggedIn }) => {
 
  const [listTransactions, setListTransactions] = useState([]);

  const [listaFiltrada, setListaFiltrada] = useState([]);

  function Logout() {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  }

  function filtragemTodos() {
    setListaFiltrada([]);
  }

  function filtragemEntradas() {
    setListaFiltrada(listTransactions.filter((elm) => elm.type === "entrada"));
  }

  function filtragemDespesas() {
    setListaFiltrada(listTransactions.filter((elm) => elm.type === "saída"));
  }

  return (
    <main>
      <header>
        <h1>
          <span className="Nu">Nu</span> kenzie
        </h1>
        <button onClick={() => Logout(isLoggedIn)} className="inicio">
          início
        </button>
      </header>
      <section className="flex">
        <div className="form__total">
          <div className="formulario_total">
            <Form setListTransactions={setListTransactions} />
            <TotalMoney listTransactions={listTransactions} />
          </div>
        </div>
        <article>
          <div className="btn_buttons">
            <p>Resumo financeiro</p>
            <div className="btn_buttons-btn">
              <button className="Todos" onClick={filtragemTodos}>
                Todos
              </button>
              <button className="Entradas" onClick={filtragemEntradas}>
                Entradas
              </button>
              <button className="Despesas" onClick={filtragemDespesas}>
                Despesas
              </button>
            </div>
          </div>
          {!listaFiltrada.length ? (
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          ) : (
            <List
              listTransactions={listaFiltrada}
              setListTransactions={setListaFiltrada}
            />
          )}
        </article>
      </section>
    </main>
  );
};

export default PaginaPrincipal;
