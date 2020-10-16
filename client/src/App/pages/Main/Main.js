import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import './Main.scss'
import Article from "./сomponents/Article";
import {useDispatch, useSelector} from "react-redux";
import {MainPageHeader} from "./сomponents/MainPageHeader";


function Main() {
  // Возвращаем полученный ответ с сервера (комментарии)
  const {allCollection} = useSelector(state => state.collectionReducer)
    // Индикатор загрузки
  const loading = useSelector(state => state.appReducer.loading)

  if(loading) {
    return <div>loading</div>
  }

  return (
    <div className='Main-page'>
      <div className='main-page-header-wrapper'>
        <MainPageHeader/>
      </div>
      <Article games={allCollection}/>
    </div>
  );
}

export default Main



