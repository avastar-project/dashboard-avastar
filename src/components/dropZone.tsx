import React, { useState } from "react";
// useState is a Hook that lets you add React state to function components
import * as JSZip from "jszip";
// JSZip is a javascript library for creating, reading and editing .zip files, with a lovely and simple API

export default function DropzoneFiles() {
  const [files] = useState("");
  const handleChange = (e:any) => {
    var fileReader = new FileReader();
    // The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    fileReader.readAsArrayBuffer(e.target.files[0]);
    // Method used to start reading the contents of a specified Blob or File. When the read operation is finished, the readyState becomes DONE, and the loadend is triggered. At that time, the result attribute contains an ArrayBuffer representing the file's data.
    const pathList = [] as any;
    const contentList = [] as any;
    // Create list to store the file paths within the .zip and the content of each file.
    fileReader.onload = (e:any) => {
    // The FileReader.onload property contains an event handler executed when the FileReader.load_event event is fired, when content read with readAsArrayBuffer, readAsBinaryString, readAsDataURL or readAsText is available.
        JSZip.loadAsync(e.target.result).then(function(zip:any) {
            Object.keys(zip.files).forEach(function (filename) {
            // The Object.keys() method returns a table with all the properties of the unzip file. it follows an iteration
                if (filename.split('.')[1] === 'json') {
                    pathList.push(filename);
                    zip.files[filename].async('string').then(function (fileData:any) {
                    contentList.push(fileData);
                    })
                    // if json file, path and content are added to the lists
                } else if (filename.split('.')[1] === 'csv') {
                    pathList.push(filename);
                    zip.files[filename].async('string').then(function (fileData:any) {
                    contentList.push(fileData);
                    })
                    // if csv file, path and content are added to the lists
                } else if (filename.split('.').length === 1 ) {
                    console.log('It\' not a file but a directory')
                } else {
                    console.log('unknown file type')
                }
              })
            console.log("Here is a list with path files", pathList)
            console.log("Here is a list with content files", contentList)
      });
    };
    fileReader.onerror = function(err:any) {
        console.error("Failed to read file", err);
    }
  };

  return (
    <>
      <br />
      <input type="file" onChange={handleChange} accept=".zip"/>
      <br />
      {files}
    </>
  );
}
// accept only .zip file
