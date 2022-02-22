import Plot from 'react-plotly.js';
// import { isConstructorDeclaration } from 'typescript';

import JsonData from '../fake-data/facebook-data-fake/location/primary_location.json'
import DataModel from '../utils/DataModel.json'

// create a plot to see the console.log
const BarChart = () => {

    return (
    <Plot
      data={[
        {type: 'bar',
        x: ['Location', 'Behavioural', 'Communication', 'Technical', 'Social relationship', 'Contact', 'Transactional'],
        y: [1, 2, 3, 3, 2, 3, 1], marker: {color : ['#636EFA','#EF553B', '#00CC96', '#AB63FA', '#FFA15A', '#19D3F3', '#FF6692']}},
      ]}
      layout={{width: 800, height: 450, title: 'What is being tracked ?', paper_bgcolor : 'rgba(0,0,0,0)', plot_bgcolor : 'rgba(0,0,0,0)', yaxis : {title : {text : 'Number of data points', font : {size: 13}}}, xaxis: {categoryorder: 'total descending'}}}
    />
    );
  }

// CHALLENGE 1 - Check if the file exists in DataModel

// (1) Declare file path (hardcoded for now, will be dynamic when we'll have the upload component ~ list of strings representing paths)
const ParsedFilePath = "location/primary_location.json"

// (2) Declare all file paths available in the datamodel
const listFileNames = Object.keys(DataModel.datamodel)

// (3) Print the list of file paths supported in the datamodel
// console.log(listFileNames)

// (4) Check if hardcoded file path exists in the datamodel list of files 
let parse = (x: string) => {
  let result;
  if (listFileNames.includes(x) === true) {
    result = 'exists';
  } else {
    result = 'NOT exists'
  }
  return console.log(result);
}

// parse(ParsedFilePath)


// CHALLENGE 2 - Fetch dynamically the #hardcoded properties of the file objects in the DataModel based on retrieved nested_array_name and list of nested_object_keys
// To be retrieved in parsed file : primary_location_v2 ; ['city_region_pairs', 'zipcode']

// (1) Get nested_array_name from parsed file
const nestedArrayName = String(Object.keys(JsonData))
// console.log(nestedArrayName)


// (2) Get list of nested_object_keys from parsed file 
const listNestedObjectKeys = Object.keys((JsonData as any)[nestedArrayName])


// (3) Create list with names of hardcoded properties in dataModel
const propertiesName = ['action_type', 'data_origin', 'data_type', 'platform']

// (4) Read content of datamodel based on nested object keys from the file
// Hardcoded path
//console.log(DataModel.datamodel['location/primary_location.json'].primary_location_v2.city_region_pairs[0].action_type) 

// Dynamic path
// console.log((DataModel.datamodel as any)[ParsedFilePath][nestedArrayName][listNestedObjectKeys[0]][1][propertiesName[1]]) // iteratation --> [i][propertiesName[i]]

parse = (fileName) => {
  const aggArray = []
  for (let i = 0; i < listNestedObjectKeys.length; i++) {
    const indivArray = []
    for (let j = 0; j < propertiesName.length; j++) {
      indivArray.push((DataModel.datamodel as any)[fileName][nestedArrayName][listNestedObjectKeys[i]][j][propertiesName[j]])
    }
    aggArray.push(indivArray)
    console.log(aggArray)
  }
  return aggArray;
}

parse(ParsedFilePath)

// CHALLENGE 3 - Write a function that iterates on the Json objects and print for each of the entries of nestedObjectKeys : action_type, data_origin, data_type and platform
// INPUTS :
// jsonData
// dataModel
// parsedFilePath (string) -> Upload component
// nestedArrayName (string) -> dataModel
// nestedObjectKeys (list) -> jsonData
parse = (fileName) => {
  const aggArray = []
  for (let i = 0; i < listNestedObjectKeys.length; i++) {
    const indivArray = []
    for (let j = 0; j < propertiesName.length; j++) {
      indivArray.push((DataModel.datamodel as any)[fileName][nestedArrayName][listNestedObjectKeys[i]][j][propertiesName[j]])
    }
    aggArray.push(indivArray)
    console.log(aggArray)
  }
  return aggArray;
}

parse(ParsedFilePath)

// Next steps : 
// (1) Make the inputs of the function dynamic. Make sure it works on all test files.
// (2) Get the timestamp and details properties from JsonData dynamically.


export default BarChart
