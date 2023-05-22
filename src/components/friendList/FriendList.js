import PropTypes from 'prop-types';
import FriendListItem from "./friendListItem";
import css from './friendList.module.css';


function FriendList({friends}){
return (
   <ul className={css['friend-list']}>
{friends.map(({ id, avatar, name, isOnline }) => (
  <FriendListItem
    key={id}
    isOnline={isOnline}
    avatar={avatar}
    name={name}
  />
))}

</ul>


)

}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};


export default FriendList
