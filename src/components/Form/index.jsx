import "./style.css";
import { useState } from "react";

function Form({ setListTransactions }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  function handleTransactions(event) {
    event.preventDefault();

    if (tipo === "saída" && valor > 0) {
      const objTransacao = {
        description: descricao,
        type: tipo,
        value: parseInt(valor) * -1,
      };
      return setListTransactions((enviarTrasacao) => [
        ...enviarTrasacao,
        objTransacao,
      ]);
    } else if (tipo === "saída" && valor < 0) {
      const objTransacao = {
        description: descricao,
        type: tipo,
        value: parseInt(valor) ,
      };
      return setListTransactions((enviarTrasacao) => [
        ...enviarTrasacao,
        objTransacao,
      ]);
    }

    if (tipo === "entrada" && valor < 0) {
      const objTransacao = {
        description: descricao,
        type: tipo,
        value: parseInt(valor) * -1,
      };
      setListTransactions((enviarTrasacao) => [
        ...enviarTrasacao,
        objTransacao,
      ]);
    } else if (tipo === "entrada" && valor > 0) {
      const objTransacao = {
        description: descricao,
        type: tipo,
        value: parseInt(valor),
      };
      setListTransactions((enviarTrasacao) => [
        ...enviarTrasacao,
        objTransacao,
      ]);
    }
  }

  return (
    <form action="" onSubmit={handleTransactions}>
      <label htmlFor="">Descrição</label>
      <input
        type="text"
        placeholder="digite a descrição..."
        onChange={(event) => setDescricao(event.target.value)}
        className="descricao"
        required
      />
      <section>
        <div className="valor">
          <label htmlFor="">Valor</label>
          <input
            type="number"
            placeholder="digite a quantia..."
            onChange={(event) => setValor(event.target.value)}
            className="input_number"
            required
          />
        </div>
        <div className="tipoValor">
          <label htmlFor="">Tipo de valor</label>
          <select
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
            className="input_select"
            required
          >
            <option value={"entrada"}>entrada</option>
            <option value={"saída"}>saída</option>
          </select>
        </div>
      </section>
      <div className="btn_inserirValor">
        <button type="submit" className="inserirValor">
          inserir valor
        </button>
      </div>
    </form>
  );
}

export default Form;

/* Input para pegar o valor.
Input para pegar a descrição.
Select para escolher entre entrada e saída.
Button para enviar */
