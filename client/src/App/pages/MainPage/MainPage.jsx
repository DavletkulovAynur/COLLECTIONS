import React from "react";
import CollectionsList from "../../../Common/components/CollectionsList/CollectionsList";
import { useSelector } from "react-redux";

function MainPage() {
  const { allCollection } = useSelector((state) => state.collectionReducer);

  return (
    <div>
      <CollectionsList data={allCollection} />
    </div>
  );
}

export default MainPage;
