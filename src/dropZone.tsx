import React, {useCallback} from 'react'
// import { BlobReader, TextWriter, ZipReader } from '@zip.js/zip.js'
import {useDropzone} from 'react-dropzone'

export default function DropzoneMultiplefiles() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file : any) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {

      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
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
