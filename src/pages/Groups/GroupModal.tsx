import React from "react";
import Users from "../AllUsers/Users";
import { useDispatch } from "react-redux";
import { addUserInGroup } from "../../redux/slices/groupsSlice";

const GroupsModal = ({ groups, onClose, user }) => {
  const dispatch = useDispatch()

  const handleAddGroup = (groupId) => {
    dispatch(addUserInGroup({groupId, userId: user._id}))
    onClose()
  }
	
  return (
    <div>
      <ul>
        {groups?.map((group) => (
          <li key={group._id} onClick={() => handleAddGroup(group._id)}>{group.groups}</li>
        ))}
      </ul>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default GroupsModal;
