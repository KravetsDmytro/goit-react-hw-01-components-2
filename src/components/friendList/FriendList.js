import FriendListItem from "./friendListItem";

function FriendList({friends}){
return ( <ul className="css">
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


export default FriendList
