import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
  <div className={css.mainInfo}>
    <img className={css.profileImage}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.statsList}>
    <li className={css.statsListItem}>
      <span className={css.statsListTitle}>Followers</span>
      <span className={css.statsListInfo}>{stats.followers}</span>
    </li>
    <li className={css.statsListItem}>
      <span className={css.statsListTitle}>Views</span>
      <span className={css.statsListInfo}>{stats.views}</span>
    </li>
    <li className={css.statsListItem}>
      <span className={css.statsListTitle}>Likes</span>
      <span className={css.statsListInfo}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

export default Profile;