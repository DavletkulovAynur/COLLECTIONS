import React from 'react'
import './Main.scss'
import Article from "./сomponents/Article";
import {useDispatch, useSelector} from "react-redux";
import {MainPageHeader} from "./сomponents/MainPageHeader";


function Main() {
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
      <Article collection={allCollection}/>
    </div>
  );
}

export default Main



