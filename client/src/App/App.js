import React, { useEffect, useState } from "react";
import {Redirect} from 'react-router-dom'
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
import { useRouter } from "Common/utils/hooks/useRouter.hook";
import { checkHashAction } from "Store/reducers/components/authReducer";

function App() {
  const dispatch = useDispatch();
  const router = useRouter();
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

  
  useEffect(() => {
   if(router.query.hasOwnProperty('email')) {
      const email = router.query['email']
     
      // FIXME:
      dispatch(checkHashAction({email: email}))
      let baseUrl = window.location.href.split("?")[0];
      window.history.pushState('name', '', baseUrl);
    }
  }, [])

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
      <PopupAlert/>
    </div>
  );
}

export default App;
