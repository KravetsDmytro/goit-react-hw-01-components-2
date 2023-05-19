import Profile from "./profile/profile.js";
import user from './profile/user.json';
import Statistics from './statistics/statistics.js';
import data from './statistics/data.json';
import FriendList from "./friendList/FriendList.js";
import friends from './friendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {


  return (
    <div>

<Profile
username={user.username}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}/>

<Statistics title="UPLOAD STATS" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items ={transactions} />;


   </div>
  );
};
