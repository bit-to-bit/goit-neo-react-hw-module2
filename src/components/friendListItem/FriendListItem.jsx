import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const { name, avatar, isOnline } = friend;

  return (
    <li className={css.friend}>
      <img src={avatar} alt={avatar} />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.friendState, isOnline && css.isOnline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
