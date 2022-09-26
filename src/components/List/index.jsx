import Card from "../Card";
import "./style.css";

function List({ listTransactions, setListTransactions }) {
  return (
    <ul>
      {!listTransactions.length ? (
        <h3 className="listaVazia">Você não possue lançamentos</h3>
      ) : (
        listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        ))
      )}
    </ul>
  );
}

export default List;
