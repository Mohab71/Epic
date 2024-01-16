/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/jpeg", "image/png"];

  const handleUpload = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (.PNG or .JPEG)");
    }
  };

  return (
    <>
      <form>
        <label>
          <input type="file" onChange={handleUpload} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div className="file">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
};

export default UploadForm;
