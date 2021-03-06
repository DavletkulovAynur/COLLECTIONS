import React from 'react';
import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'

const PersonalAreaTemplate = ({avatar, myCollection, fileUploadHandler}) => {

  return (
    <div>
      <h1>Поменять аватарку</h1>
      <input onChange={(event) => fileUploadHandler(event)} type='file'/>

        <div className='Collections-list'>
            <div className='Com-main-grid'>
                <CommonCard data={myCollection}/>
            </div>
        </div>
    </div>
  );
};

export default PersonalAreaTemplate;