import React from "react";

export function CollectionViewCommentTitle({comments}) {

  return (
    <h2 className='Comment-box__title'>
      Комментарии
      <sup>{comments.length}</sup>
    </h2>
  )
}