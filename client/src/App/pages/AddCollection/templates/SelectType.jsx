import React from 'react'
import Select from 'react-select'
import {typeCollection} from "../../../../config";

// TODO подумать над шрифтом
export function SelectType({writeDownSelectValue}) {
  const customStyles = {
    control: base => ({
      ...base,
      fontFamily: "Roboto",
      fontWeight: 300,
    }),
    menu: base => ({
      ...base,
      fontFamily: "Roboto",
      fontWeight: 300,
    })
  }

  return <Select placeholder='Тип коллекции'
                 onChange={(event) => writeDownSelectValue(event.value)}
                 options={typeCollection}
                 styles={customStyles}
                 theme={(theme) => ({
                   ...theme,
                   borderRadius: 4,
                   colors: {
                     ...theme.colors,
                     primary25: '#f5f5f5',
                     primary: '#f5f5f5',
                   },
                 })}/>
}