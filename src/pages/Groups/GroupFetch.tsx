import React, { useEffect, useState } from "react";
import {
  createGroups,
  deleteGroups,
  fetchGroup,
  updateGroupsInStore,
} from "../../redux/slices/groupsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./groups.module.css";

const GroupFetch = () => {
  const groups = useSelector((state) => state.groups.groups);
  const dispatch = useDispatch();
  const [editingGroupId, setEditingGroupId] = useState(null);
  const [editingGroupName, setEditingGroupName] = useState("");
  const [groupName, setGroupName] = useState("");

  const handleDeleteGroup = (groupId) => {
    dispatch(deleteGroups(groupId));
  };

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleAddGroup = () => {
    if (groupName.trim() === "") {
      return;
    }
    dispatch(createGroups(groupName));
    setGroupName("");
  };

  const handleEditGroup = (groupId) => {
    if (editingGroupName.trim() !== "") {
      dispatch(
        updateGroupsInStore({ groupId, updatedGroupName: editingGroupName })
      );
      setEditingGroupId(null);
    }
  };

  useEffect(() => {
    dispatch(fetchGroup());
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.input_group}>
        <input type="text" value={groupName} onChange={handleInputChange} />
        <div className={styles.btn_add_group}>
          <button onClick={handleAddGroup}>+</button>
        </div>
      </div>
      <div className={styles.content}>
        {groups.map((item) => {
          const isEditing = editingGroupId === item._id;
          return (
            <div className={styles.card} key={item._id}>
              <div>
              <span
                  onClick={() => handleDeleteGroup(item._id)}
                  className={`${styles.delete_group} material-symbols-outlined`}
                >
                  backspace
                </span>
                {isEditing ? (
                  <div className={`${styles.btn_check_mark} material-symbols-outlined `} onClick={() => handleEditGroup(item._id, item.groups)}>
                    done
                  </div>
                ) : (
                  <div className={`${styles.btn_redaction_mark} material-symbols-outlined `} onClick={() => setEditingGroupId(item._id)}>edit</div>
                )}
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={editingGroupName}
                  onChange={(e) => {
                    setEditingGroupName(e.target.value);
                  }}
                />
              ) : (
                <span>{item.groups}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupFetch;
