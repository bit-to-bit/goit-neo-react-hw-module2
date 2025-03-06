import userData from './data/userData.json';
import friendsData from './data/friendsData.json';
import transactionsData from './data/transactionsData.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import Profile from './components/profile/Profile';
import FriendList from './components/friendList/FriendList';

const App = () => {
  const user = userData;
  const friends = friendsData.friends;
  const transactions = transactionsData.transactions;
  return (
    <>
      <section>
        <h2>Profile</h2>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          image={user.avatar}
          stats={user.stats}
        />
      </section>
      <section>
        <h2>FriendList</h2>
        <FriendList friends={friends} />
      </section>
      <section>
        <h2>TransactionHistory</h2>
        <TransactionHistory transactions={transactions}></TransactionHistory>
      </section>
    </>
  );
};

export default App;
