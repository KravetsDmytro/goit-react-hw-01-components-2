import css from './friendList.module.css';

function FriendListItem({ avatar, name, isOnline }){

return (
<li className={css.item}>
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>

)
}


export default FriendListItem
