export function isJSONFile(filename: string) {
  var regexJsonFile = new RegExp('.json$', 'i');
  return regexJsonFile.test(filename);
}
