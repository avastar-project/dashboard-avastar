import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { useState, ChangeEvent } from 'react';
interface PropsFilter {
  optionsList: String[];
  name: string;
  onChange: (value: string) => void;
}

export default function Filter(props: PropsFilter) {
  const [option, setOptions] = useState<String>('');
  var selectChange = (event: ChangeEvent<{ value: string }>): void => {
    setOptions(event.target.value);
    props.onChange(event.target.value);
  };
  return (
    <FormControl>
      <InputLabel id="platform">{props.name}</InputLabel>
      <Select
        labelId="select-option"
        id={props.name}
        value={option}
        label="option"
        onChange={selectChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.optionsList.map((element, index) => (
          <MenuItem key={index} value={element}>
            {element}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
