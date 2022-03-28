import React, { useState } from "react";

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
      <br />
      <input type="file" onChange={handleChange} />
      <br />
      {files}
    </>
  );
}
