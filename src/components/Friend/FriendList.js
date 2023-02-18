import PropTypes from 'prop-types';
import { ListItem, Img, Dot } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul className="#">
      {friends.map(friend => {
        return (
          <ListItem key={friend.id}>
            <Dot isActive={friend.isOnline ? 'true' : 'false'}></Dot>
            <Img src={friend.avatar} alt={friend.name} />
            <p>{friend.name}</p>
          </ListItem>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
