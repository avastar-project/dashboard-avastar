export function readFileAsync(file: File): Promise<string | ArrayBuffer> {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result);
      } else {
        reject(new Error('FileReader: no result'));
      }
    };

    reader.onerror = (err) => {
      console.error('Failed to read file', err);
      reject(err);
    };

    reader.readAsArrayBuffer(file);
  });
}
