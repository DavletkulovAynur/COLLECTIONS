import React from 'react'
import {API_URL} from "../../../../config";

export function CollectionViewImg({mainImg, owner}) {

  const divStyle = () => {
    return {
      backgroundImage: `url(${API_URL}/${owner}/compressed/${mainImg})`,
    }
  };

  return (
    <div className='Article-view__img-wrapper'>
      {mainImg && <div className='Article-view__img' style={divStyle()}></div>}
    </div>
  )
}