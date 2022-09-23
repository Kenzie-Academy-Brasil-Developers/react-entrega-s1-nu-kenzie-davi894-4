import Card from "../Card";
import "./style.css";

function List({ listTransactions, setListTransactions }) {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          key={index}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      ))}
    </ul>
  );
}

export default List;
