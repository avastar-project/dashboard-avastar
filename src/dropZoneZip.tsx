import React, { useState } from "react";
import * as JSZip from "jszip";

export default function DropzoneZipfiles() {
  const [files, setFiles] = useState("");
  const handleChange = (e:any) => {
    var fileReader = new FileReader();
    fileReader.readAsArrayBuffer(e.target.files[0]);
    fileReader.onload = (e:any) => {
        JSZip.loadAsync(e.target.result).then(function(zip:any) {
            Object.keys(zip.files).forEach(function (filename) {
                const directoryList = [] as any
                const contentList = [] as any
                if (filename.split('.')[1] === 'json') {
                    // show filename
                    directoryList.push(filename);
                    zip.files[filename].async('string').then(function (fileData:any) {
                    // show filecontent
                    contentList.push(fileData);
                    })
                } else if (filename.split('.')[1] === 'csv') {
                    // show filename
                    directoryList.push(filename);
                    zip.files[filename].async('string').then(function (fileData:any) {
                    // show filecontent
                    contentList.push(fileData);
                    })
                } else if (filename.split('.').length === 1 ) {
                    console.log('directory')
                } else {
                    console.log('unknown file type')
                }
              })
      });
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
