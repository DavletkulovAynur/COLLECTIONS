import React, { useState } from "react";
import "./AddCollection.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  sendCollectionImgErrorAction,
  sendCollectionPreviewImg,
} from "../../../Store/reducers/components/addCollectionReducer";
import { addCollectionAction } from "../../../Store/actions/action";
import { validationInputs } from "../../../Common/utils/checkForm";
import { useInput } from "../../../Common/utils/hooks/input.hook";
//Templates
import { DragAndDrop } from "../../../Common/components/DragAndDrop/DragAndDrop";
import { AddCollectionInputs } from "./templates/AddCollectionInputs";
import StylePin from "./templates/StylePin";
import { AddCollectionButton } from "./templates/AddCollectionButton";
import { AddCollectionMobile } from "./AddCollectionMobile";

function AddCollection() {
  const { load, fileImg } = useSelector((state) => state.addCollectionReducer);
  // const [fileImg, setFileImg] = useState(null)
  const [inputErrors, SetInputErrors] = useState({});
  const dispatch = useDispatch();
  const formData = new FormData();
  const [stylePin, setStylePin] = useState("middle");
  const [selectValue, setSelectValue] = useState("");

  //
  const title = useInput("", handleSubmit);
  const description = useInput("", handleSubmit);
  const nameCollection = useInput("");

  function handleSubmit(event) {
    event.preventDefault();
    const error = errorChecking();

    if (!error) {
      return;
    }
    AppendInFormData();
    sendCollection();
  }

  // TODO плохое решение возвращать false и true
  function errorChecking() {
    const thereAreMistakesInInputs = validationInputs({ title: title.value });
    SetInputErrors(thereAreMistakesInInputs);
    if (!fileImg) {
      dispatch(sendCollectionImgErrorAction(true));
      return false;
    }
    if (Object.keys(thereAreMistakesInInputs).length !== 0) {
      return false;
    }
    return true;
  }

  function AppendInFormData() {
    formData.append("file", fileImg);
    formData.append("title", title.value);
    formData.append("description", description.value);
    formData.append("stylePin", stylePin);
    formData.append("nameCollection", selectValue);
  }

  function sendCollection() {
    dispatch(addCollectionAction(formData));
    SetInputErrors({});
    title.clear();
    description.clear();
  }

  const deleteImg = () => {
    dispatch(sendCollectionImgErrorAction(false));
    dispatch(
      sendCollectionPreviewImg({
        file: null,
        reader: null,
      })
    );
    // setFileImg(null)
  };

  const loadImg = (file, reader) => {
    dispatch(sendCollectionImgErrorAction(false));
    // отправить одним файлом
    dispatch(
      sendCollectionPreviewImg({
        file,
        reader,
      })
    );
  };

  function changeStyleSelect(type) {
    setStylePin(type);
  }

  function writeDownSelectValue(value) {
    setSelectValue(value);
  }

  return (
    <div className="Add-collection Add-collection-root">
      <div className="Add-collection__desktop">
        <h1 className="Add-collection__title">Создание коллекции</h1>
        <form className="Add-collection__form">
          <section className="Add-collection__drag-drop-box">
            <DragAndDrop loadImg={loadImg} deleteImg={deleteImg} />
          </section>
          <section className="Add-collection__inputs">
            <div>
              <AddCollectionInputs
                writeDownSelectValue={writeDownSelectValue}
                inputErrors={inputErrors}
                description={description}
                title={title}
                nameCollection={nameCollection}
              />
              <StylePin changeStyleSelect={changeStyleSelect} />
            </div>
            <AddCollectionButton load={load} handleSubmit={handleSubmit} />
          </section>
        </form>
      </div>

      <div className="Add-collection__mobile">
        <AddCollectionMobile
          fileImg={fileImg}
          loadImg={loadImg}
          deleteImg={deleteImg}
          changeStyleSelect={changeStyleSelect}
          writeDownSelectValue={writeDownSelectValue}
          inputErrors={inputErrors}
          description={description}
          title={title}
          nameCollection={nameCollection}
          load={load}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddCollection;
