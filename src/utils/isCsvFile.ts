export function isCSVFile(filename: string) {
  var regexCsvFile = new RegExp('.csv$', 'i');
  return regexCsvFile.test(filename);
}
