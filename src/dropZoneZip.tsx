import React, { useState } from "react";
import * as JSZip from "jszip";

export default function DropzoneZipfiles() {
  const [files, setFiles] = useState("");
  const handleChange = (e:any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = function(e:any) {
        JSZip.loadAsync(e.target.result).then(function(zip:any) {
            console.log(zip)
        }).catch(function(err:any) {
            console.error("Failed to open as ZIP file");
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
