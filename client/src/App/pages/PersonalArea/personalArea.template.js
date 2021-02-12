import React from 'react';

const PersonalAreaTemplate = ({fileUploadHandler}) => {
  return (
    <div>
      <h1>Hello</h1>
      <input onChange={(event) => fileUploadHandler(event)} type='file'/>
    </div>
  );
};

export default PersonalAreaTemplate;