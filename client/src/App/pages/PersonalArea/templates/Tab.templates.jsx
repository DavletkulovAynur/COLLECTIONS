import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TabTemplates({ tabValue, changeTabValue }) {
  const test = (event) => {
    let $rootElement = event.target.closest("[data-tab]");
    if (!$rootElement) return;

    switch ($rootElement.dataset.tab) {
      case "my-collection":
        changeTabValue("my-collection");
        break;
      case "archive":
        changeTabValue("archive");
        break;
      case "subscribe-collection":
        changeTabValue("subscribe-collection");
        break;
    }
  };

  const buttons = [
    {
      icon: "stream",
      value: "my-collection",
      description: "Мои коллекции",
    },
    {
      icon: "archive",
      value: "archive",
      description: "Мои сохранения",
    },
    {
      icon: "user-friends",
      value: "subscribe-collection",
      description: "Коллекции друзей",
    },
  ];

  return (
    <div onClick={test} className="Personal-area__tab-box tab">
      {buttons.map((button, index) => {
        const { icon, value, description } = button;
        return (
          <div
            key={index}
            data-tab={`${value}`}
            className={`tab__element-wrapper ${
              tabValue === value ? "tab_active" : ""
            }`}
          >
            <div className="tab__item">
              <FontAwesomeIcon icon={`${icon}`} color="#000" />
            </div>
            {/*<h4 className='tab__description'>{description}</h4>*/}
          </div>
        );
      })}
    </div>
  );
}
