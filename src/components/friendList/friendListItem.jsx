import PropTypes from 'prop-types';
import css from './friendList.module.css';
import { BiBody } from "react-icons/bi";

function FriendListItem({ avatar, name, isOnline }){

return (
<li className={css.item}>
<BiBody className={isOnline ? css.online : css.offline}> </ BiBody >
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>

</li>

)
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem
