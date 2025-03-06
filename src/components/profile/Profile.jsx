import css from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt='User avatar' />
        <h2>{name}</h2>
        <p>{'@' + tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.stats}>
        {Object.keys(stats).map((key, index) => {
          return (
            <li key={index}>
              <span>{key}</span>
              <span>{stats[key]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
