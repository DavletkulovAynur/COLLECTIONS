import React from "react";

export function CollectionViewCommentTitle({comments}) {

  return (
    <div className='Comments-wrapper__title'>
      Комментарии
      <sup>{comments.length}</sup>
    </div>
  )
}