import React from 'react'

const AddCollectionTemplate = ({title, img, publisher, description, testSelect, handleSubmit}) => {

  function inputForm(placeholder, input) {
    return (
      <input className='com-input-styles' type='text' placeholder={placeholder} {...input.bind}/>
    )
  }
  function dropArea() {
    return (
      <div id="drop-area-js" className="drop-area">
        <form>
          <div className="cloud">
            <div className="icon"></div>
            <i className="text">Кликните или перетащите, чтобы загрузить фотографии</i>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className='Add-collection'>
      <h1>ADD GAME</h1>
      <div className='form'>
        <form onSubmit={() => handleSubmit()}>
          {/*<Select options={{*/}
          {/*  data: [*/}
          {/*    {id: '1', value: 'React'},*/}
          {/*    {id: '2', value: 'Angular'},*/}
          {/*    {id: '3', value: 'Vue'},*/}
          {/*    {id: '4', value: 'React Native'},*/}
          {/*    {id: '5', value: 'Next'},*/}
          {/*    {id: '5', value: 'Nest'}*/}
          {/*  ],*/}
          {/*}}/>*/}
          {/*<select {...testSelect.bind}>*/}
          {/*  <option>book</option>*/}
          {/*  <option>movie</option>*/}
          {/*  <option>game</option>*/}
          {/*  <option>photo</option>*/}
          {/*</select>*/}
          {dropArea()}
          {inputForm('title', title)}
          {inputForm('img', img)}
          {inputForm('publisher', publisher)}
          {inputForm('description', description)}
          <input type="submit" className="com-btn-styles btn-primary" value="SEND"/>
        </form>
      </div>
    </div>
  );
};

export default AddCollectionTemplate;