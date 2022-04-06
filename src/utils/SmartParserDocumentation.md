# Smart Parser

SmartParser is a function built to parse the files **uploaded by the user** on the Webapp.

The function is based on the **DataModel**, built by Avastar, which makes it possible to associate each data points identified in the files with metadata to describe it.

Thanks to the metadata, we can establish several types of segmentations/aggregations of the user's data that will be visualised in the Webapp to improve its understanding of its digital identity.

## Inputs

The function takes 3 inputs:

- The file paths contained in the Zip file uploaded by the user ;
- The content of the file uploaded by the user ;
- The content of DataModel.json file contained in the project.

## Output

The output of the function is an array named smartData which will be the source file of the visualisations showed in the Webapp. It will be saved in the State of the app to make the data available to any component.

Below is the format of the function output, with one object to describe the properties of each data points identified in the files uploaded on the Webapp by the user.

```
{
  "data_classification": [
    {
      "platform": "Facebook",
      "source": "location/primary_location.json",
      "data_type": "Location",
      "data_origin": "Volunteered",
      "interaction_date": "",
      "action": "Add primary location",
      "details": ["Paris", "Ile-de-France"]
    },
    {
      "platform": "Facebook",
      "source": "profile/profile_information.json",
      "data_type": "Location",
      "data_origin": "Volunteered",
      "interaction_date": "",
      "action": "Add current location",
      "details": "Lille"
    },
    {
      "platform": "Facebook",
      "source": "security/security_and_login_information.json",
      "data_type": "Location",
      "data_origin": "Observed",
      "interaction_date": 1631134759,
      "action": "Login",
      "details": "2a01:cb08:8667:5800:e053:5590:248a:5b18"
    }
}
```

## Definitions

### JSON file structure

Below is a classic structure of a JSON file that the SmartParser is able to handle. For every data point identified (e.g. the {object} between '--'), the function identifies its properties in the DataModel and injects them in the final array SmartData.

```
{
  "nestedArrayName": [
    {
      "name": "",
      "description": "",
      "entries": [
        --
        {
          "timestamp": 1643662465,
          "data": {
            "name": "XXXX",
            "uri": "https://www.facebook.com/XXXX"
          }
        },
        --
        {
          "timestamp": 1643662465,
          "data": {
            "name": "XXXX",
            "uri": "https://www.facebook.com/XXXX"
          }
        }
      ]
    }
  ]
}
```

There are different types of JSON file structures, which makes the process to access a data point different. By definition, a JSON file consists of a nested data structure, an array or object which refers to other arrays or objects, i.e. its values are arrays or objects.

Such structures can be accessed by consecutively applying dot or bracket notation (e.g. `const item_name = data['items'][1]['name'];`).

In the function, we apply different methodologies to the file depending on the number of nested data structures there is until the data point of interest. We call it the "file depth".

[Further reading](https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json) about JSON files processing.

### Function variables

- fileDepth: number of nested data structures until the data point of interest ;
- ObjectPropertiesName: list of the metadata attributes used to describe each data point ;
- indivArray: array in which are stored the metadata of each object ;
- aggArray: array containing all the arrays describing each data points identified in files.

## Function status

- Parsing of Facebook files : DONE
- Parsing of Google files : WIP
