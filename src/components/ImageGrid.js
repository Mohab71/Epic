/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import useFirestore from "./hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="Image Preview" />
            </div>
          );
        })}
    </div>
  );
};
export default ImageGrid;
