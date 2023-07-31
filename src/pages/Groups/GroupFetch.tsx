import { useEffect, useState } from "react";
import {
  createGroups,
  deleteGroups,
  fetchGroups,
  updateGroupsInStore,
} from "../../redux/slices/groupsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./groups.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { GroupOutlined } from "@ant-design/icons";
import { AppDispatch, RootState } from "@/redux/store/store";

interface Group {
  _id: string;
  groups: string;
  users: any[]; 
}

const GroupFetch = () => {
  const groups = useSelector((state: RootState) => state.groups.groups);

  const dispatch = useDispatch<AppDispatch>();
  const [editingGroupId, setEditingGroupId] = useState<string | null>(null);
  const [editingGroupName, setEditingGroupName] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");

  const handleDeleteGroup = (groupId: string) => {
    dispatch(deleteGroups(groupId));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleAddGroup = () => {
    if (groupName.trim() === "") {
      return;
    }
    dispatch(createGroups(groupName));
    setGroupName("");
  };

  const handleEditGroup = (groupId: string) => {
    if (editingGroupName.trim() !== "") {
      dispatch(
        updateGroupsInStore({ groupId, updatedGroupName: editingGroupName })
      );
    }
    setEditingGroupId(null);
  };

  const handleStartEditing = (groupId: string, groupName: string) => {
    setEditingGroupId(groupId);
    setEditingGroupName(groupName);
  };

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  return (
    <>
      <div className={styles.input_group}>
        <input
          placeholder="Создайте группу..."
          type="text"
          value={groupName}
          onChange={handleInputChange}
        />
        <div>
          <Button icon={<GroupOutlined />} onClick={handleAddGroup}> +</Button>
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
                  delete
                </span>
                {isEditing ? (
                  <div
                    className={`${styles.btn_check_mark} material-symbols-outlined `}
                    onClick={() => handleEditGroup(item._id)}
                  >
                    done
                  </div>
                ) : (
                  <div
                    className={`${styles.btn_redaction_mark} material-symbols-outlined `}
                    onClick={() => handleStartEditing(item._id, item.groups)}
                  >
                    edit
                  </div>
                )}
                {isEditing ? (
                  <input
                    className={styles.edit_input}
                    type="text"
                    value={editingGroupName}
                    onChange={(e) => {
                      setEditingGroupName(e.target.value);
                    }}
                  />
                ) : (
                  <>
                    <Link to={`/groups/group/${item._id}`}>
                      <span>{item.groups}</span>
                    </Link>
                    <div className={styles.studentCount}>
                      Студентов: {item.users.length}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GroupFetch;
