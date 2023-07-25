import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGroups } from "../../redux/slices/groupsSlice";

const GroupInput = () => {
  const [groupName, setGroupName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleAddGroup = () => {
    dispatch(createGroups(groupName));
    setGroupName("");
  };

  return (
    <div>
      <input type="text" value={groupName} onChange={handleInputChange} />
      <button onClick={handleAddGroup}>+</button>
    </div>
  );
};

export default GroupInput;
