import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "App/routes";
import "./App.scss";
import {
  checkToken,
  getAllCollection,
  getMyCollection,
} from "../Store/actions/action";
import { ShowMessage } from "../Common/components/ShowMessage/ShowMessage";

import { PopUpCard } from "../Common/components/PopUpCard/PopUpCard";
import { PopupAlert } from "Common/components/PopupAlert/PopupAlert";

import { ImportFontAwesomeIcons } from "Common/utils/ImportFontAwesomeIcons";

function App() {
  const dispatch = useDispatch();
  const { token, owner, ready, isAuthenticated, active } = useSelector(
    (state) => state.authReducer
  );
  const { showMessage, text, severity } = useSelector(
    (state) => state.showMessageReducer
  );

  const { userId } = owner;
  const routes = useRoutes(isAuthenticated, active);

  useEffect(() => {
    dispatch(checkToken());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getMyCollection(userId));
      dispatch(getAllCollection());
    }
  }, [isAuthenticated]);

  if (!ready) {
    return null;
  }

  if (token) {
    localStorage.setItem("token", token);
  }

  return (
    <div className="App">
      {routes}
      <ShowMessage showMessage={showMessage} text={text} severity={severity} />
      <PopUpCard />
      <PopupAlert />
    </div>
  );
}

export default App;
