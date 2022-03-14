import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import JSZip from 'jszip';
// import { BlobReader, TextWriter, ZipReader } from '@zip.js/zip.js'

export default function DropzoneMultiplefiles() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file : any) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = e => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      console.log(reader)

      //const zipper = new JSZip();
      //const unzippedFiles = zipper.loadAsync(reader);
      //return Promise.resolve(unzippedFiles).then(unzipped => {
      //  if (!Object.keys(unzipped.files).length) {
      //    return Promise.reject('No file was found');
      //  }
      //  return unzipped.files[Object.keys(unzipped.files)[0]];
      //}).then(unzippedFile => zipper.file(unzippedFile.name).async('string'));
      })

  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}
