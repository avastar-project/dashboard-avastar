import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';
interface PropsFilter {
  optionsList: String[];
  name: string;
  onChange: (value: string) => void;
}

export default function Filter(props: PropsFilter) {
  const [option, setOptions] = useState<String>('');
  return (
    <FormControl>
      <InputLabel id="platform">{props.name}</InputLabel>
      <Select
        labelId="select-option"
        id={props.name}
        value={option}
        label="option"
        onChange={(e) => setOptions(e.target.value as string)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.optionsList.map((option:any,index :number) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
