import "./style.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="bg_TotalMoney">
      <div className="display_justify">
        <span className="valorTotal"> O valor total :</span>
        <span className="valorQuantia">
          {" "}
          R$ {listTransactions.reduce((a, b) => a + b.value, 0)}{" "}
        </span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
