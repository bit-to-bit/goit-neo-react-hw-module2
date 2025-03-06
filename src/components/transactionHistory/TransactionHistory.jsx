import Transaction from '../transaction/Transaction';
import css from './TransactionHistory.module.css';
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
