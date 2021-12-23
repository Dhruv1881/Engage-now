import React from "react";
import { Alert, Button, Divider, Drawer } from "rsuite";
import { useProfile } from "../../context/profile.context";
import { database } from "../../misc/firebase";
import { getUserUpdates } from "../../misc/helpers";
import EditableInput from "../EditableInput";
import AvatarUploadBtn from "./AvatarUploadBtn";
import ProviderBlock from "./ProviderBlock";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();

  const onSave = async (newData) => {
    try {
      const updates = await getUserUpdates(
        profile.uid,
        "name",
        newData,
        database
      );

      await database.ref().update(updates);

      Alert.success("Name Successfully Updated", 4000);
    } catch (error) {
      Alert.error(error.message, 4000);
    }
  };

  return (
    <div>
      <Drawer.Header>
        <Drawer.Title className="font-edit">Dashboard</Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <ProviderBlock />
        <Divider />
        <EditableInput
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Profile</h6>}
        />
        <AvatarUploadBtn />
      </Drawer.Body>

      <Drawer.Footer>
        <Button block color="red" className="sign-out" onClick={onSignOut}>
          SIGN OUT
        </Button>
      </Drawer.Footer>
    </div>
  );
};

export default Dashboard;