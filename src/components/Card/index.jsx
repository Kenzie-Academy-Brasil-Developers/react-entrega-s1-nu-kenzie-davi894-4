import "./style.css";
import { ReactComponent as SvgLixeira } from "../../assents/svg/lixeiro/trash-can-solid.svg";

function Card({ transaction, key, listTransactions, setListTransactions }) {
  //console.log(transaction, index, listTransactions, setListTransactions);
  console.log(transaction);
  function removerTrasacao(description) {
    setListTransactions(
      listTransactions.filter((elem) => elem.description !== description)
    );
  }
  
  return (
    <>
      {transaction.type === "entrada" ? (
        <li className="entrada" key={key}>
          <div>
            <p>{transaction.description}</p>
            <p>{transaction.type}</p>
          </div>
          <div className="Valor">
            <p className="valorEntradaSaida" key={key}>
              R$ {transaction.value}
            </p>
          </div>
          <div className="btn_lixeira">
            <button
              className="deletButton"
              onClick={() => removerTrasacao(transaction.description)}
            >
              <SvgLixeira value={key} />
            </button>
          </div>
        </li>
      ) : (
        <li className="saida" key={key}>
          <div>
            <p>{transaction.description}</p>
            <p>{transaction.type}</p>
          </div>
          <div className="Valor">
            <p className="valorEntradaSaida">R$ {transaction.value}</p>
          </div>
          <div className="btn_lixeira">
            <button
              className="deletButton"
              onClick={() => removerTrasacao(transaction.description)}
            >
              <SvgLixeira value={key} />
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default Card;
