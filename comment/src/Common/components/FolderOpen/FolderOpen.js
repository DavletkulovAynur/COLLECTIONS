import React from 'react'
import './FolderOpen.scss'
import {useSelector} from "react-redux";
import folder from '../../assets/icons/folder.svg'
import arrow from '../../assets/icons/play-button.svg'

function FolderOpen(props) {
  const {name, insideInformation} = props
  const data = useSelector((state) => state.folderReducer)

  function ArrayInformation() {
    return insideInformation.map((item, index) => {
      return (
        <div key={index}>
          {item}
        </div>
      )
    })
  }

  return (
    <div className="Folder-open">
        <article data-id={name}>
          <div className='name'>
            <img
              className={`arrow-img ${data[name] ? 'arrow-img-rotate' : ''}`}
              src={arrow}/>
            <img className='folder-img' src={folder}/>
            <div>{name}</div>
          </div>
          <div></div>
        </article>
      <div className='inside-information'>
        {data[name]
          ? <div>
            {Array.isArray(insideInformation) ? ArrayInformation() : insideInformation}
          </div>
          : null }
      </div>
    </div>
  );
}

export default FolderOpen


