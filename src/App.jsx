import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
import TotalMoney from "./components/TotalMoney";
import { ReactComponent as SvgPagina } from "./assents/svg/paginaInicial/Index.svg";
import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const [listaFiltrada, setListaFiltrada] = useState([]);

  const [trocaPagina, setTrocaPagina] = useState(true);

  function trocarPagina(valor) {
    setTrocaPagina(!valor);
    <SvgPagina />;
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
    <main className="App">
      <header>
        <h1>
          <span className="Nu">Nu</span> kenzie
        </h1>
        <button onClick={() => trocarPagina(trocaPagina)} className="inicio">
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
}

export default App;
