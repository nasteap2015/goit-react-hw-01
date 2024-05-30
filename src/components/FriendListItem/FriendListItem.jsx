import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
          <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
        <p className={css.friendName}>{name}</p>
        <p className={clsx(isOnline === true ? css.online : css.offline)}>{isOnline === true ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;