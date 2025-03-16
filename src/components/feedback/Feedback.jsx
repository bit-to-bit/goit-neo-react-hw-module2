import clsx from 'clsx';
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedbacks, positiveFeedbackRatio }) => {
  return (
    <div className={clsx('container', css.feedback)}>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(feedback).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
          <tr className={css.total}>
            <td>Total</td>
            <td>{totalFeedbacks}</td>
          </tr>
          <tr>
            <td>Positive:</td>
            <td>{positiveFeedbackRatio}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;
