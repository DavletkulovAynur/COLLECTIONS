import React from 'react'
import {API_URL} from "../../../../config";

export function CollectionViewImg({mainImg, owner}) {

  const divStyle = () => {
    return {
      backgroundImage: `url(${API_URL}/${owner}/compressed/${mainImg})`,
    }
  };

  return (
    <div>
      {mainImg && <div className='test' style={divStyle()}></div>}
    </div>
  )
}