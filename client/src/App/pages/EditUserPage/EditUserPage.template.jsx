import React from "react";
import EditingAvatar from "../../../Common/components/EditingAvatar/EditingAvatar";
import EditingProfile from "../../../Common/components/EditingProfile/EditingProfile";

export function EditUserPageTemplate({ sendAvatar, sendNewInfoProfile }) {
  return (
    <div className="User-edit User-edit-root">
      <h1 className="User-edit__title">Редактировать профиль</h1>
      <EditingAvatar sendAvatar={sendAvatar} />
      <EditingProfile sendNewInfoProfile={sendNewInfoProfile} />
    </div>
  );
}
