import React from "react";
import { useDispatch } from "react-redux";
import {
  editAvatarAction,
  editUserAction,
} from "../../../Store/actions/action";
import "./EditUserPage.scss";

import { EditUserPageTemplate } from "./EditUserPage.template";

const EditUserPage = () => {
  const dispatch = useDispatch();

  const sendAvatar = (formData) => {
    dispatch(editAvatarAction(formData));
  };

  const sendNewInfoProfile = (userInformation) => {
    dispatch(editUserAction(userInformation));
  };

  return (
    <EditUserPageTemplate
      sendAvatar={sendAvatar}
      sendNewInfoProfile={sendNewInfoProfile}
    />
  );
};

export default EditUserPage;
