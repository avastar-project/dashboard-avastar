/**
 * @name getErrorMessage
 * @description Function to get a formatted error message in the catch block of the project functions.
 * @param {unknown} error exception thrown containing a potential error property
 * @returns {string} string with the error message.
 */

export const getErrorMessage = (error: unknown, filePath: String) => {
    if (error instanceof Error) return 'error: ' + error.message + ', file: ' + filePath
    return String(error)
}