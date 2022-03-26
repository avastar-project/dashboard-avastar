import React, { useState } from "react";
import {useDropzone} from 'react-dropzone'
import JSZip from 'jszip';
// import { BlobReader, TextWriter, ZipReader } from '@zip.js/zip.js'

export default function DropzoneMultiplefiles() {
  const [files, setFiles] = useState("");
  const handleChange = (e:any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e:any) => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
  };
  return (
    <>
      <h1> Upload your file & I'll print the content (JSON or CSV)</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {"The content of the file will be print here --> " + files}
    </>
  );
}
