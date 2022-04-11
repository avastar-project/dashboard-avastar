import { useState } from 'react';
// useState is a Hook that lets you add React state to function components
import * as JSZip from 'jszip';
// JSZip is a javascript library for creating, reading and editing .zip files, with a lovely and simple API
import { smartParser } from '../utils/smartParser';
// smartParser is a function to read, parse and classfify the personal data files uploaded by the user
import parsingModel from '../utils/parsingModel.json';
// import parsingModel to map the properties of the scanned data points in the user personal data files

export default function DropzoneFiles() {
  const parsingModelFilepath = Object.keys(parsingModel.parsingmodel);
  const [files] = useState('');
  const handleChange = (e: any) => {
    var fileReader = new FileReader();
    // The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    fileReader.readAsArrayBuffer(e.target.files[0]);
    // Method used to start reading the contents of a specified Blob or File. When the read operation is finished, the readyState becomes DONE, and the loadend is triggered. At that time, the result attribute contains an ArrayBuffer representing the file's data.
    var smartDataBloc = [] as any;
    // Create list to store the smartData (smartParser's output)
    fileReader.onload = (e: any) => {
      // The FileReader.onload property contains an event handler executed when the FileReader.load_event event is fired, when content read with readAsArrayBuffer, readAsBinaryString, readAsDataURL or readAsText is available.
      JSZip.loadAsync(e.target.result).then(function (zip: any) {
        Object.keys(zip.files).forEach(function (filename) {
          // The Object.keys() method returns a table with all the properties of the unzip file. it follows an iteration
          if (filename.split('.')[1] === 'json') {
            for (let i = 0; i < parsingModelFilepath.length; i++) {
              if (filename.endsWith(parsingModelFilepath[i])) {
                zip.files[filename]
                  .async('string')
                  .then(function (fileData: any) {
                    const fileContent = JSON.parse(fileData); // convert the type of fileData variable from String to Object
                    if (Object.keys(fileContent).length > 0) {
                      var newElement = smartParser(filename, fileContent) as any; // execute parsing function
                      smartDataBloc.push(... newElement);
                    } else {
                      console.warn('The file is empty');
                    }
                  });
              }
            }
          } else if (filename.split('.')[1] === 'csv') {
            console.log('csv file [WIP]');
          } else if (filename.split('.').length > 1) {
            console.log('unknown file type');
          }
        });
        console.log('Here is the final array', smartDataBloc);
      });
    };
    fileReader.onerror = function (err: any) {
      console.error('Failed to read file', err);
    };
  };

  return (
    <>
      <br />
      <input type="file" onChange={handleChange} accept=".zip" />
      <br />
      {files}
    </>
  );
}
// accept only .zip file
