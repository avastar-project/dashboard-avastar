import React, { useState } from "react";
import * as JSZip from "jszip";

export default function DropzoneZipfiles() {
  const [files, setFiles] = useState("");
  const handleChange = (e:any) => {
    var fileReader = new FileReader();
    fileReader.readAsArrayBuffer(e.target.files[0]);
    fileReader.onload = (e:any) => {
        JSZip.loadAsync(e.target.result).then(function(zip:any) {
            console.log(zip.files)
        })
    };
    fileReader.onerror = function(err:any) {
        console.error("Failed to read file", err);
    }
  };

  return (
    <>
      <br />
      <input type="file" onChange={handleChange} />
      <br />
      {files}
    </>
  );
}

// next step dezip zip file
