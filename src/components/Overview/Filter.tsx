import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import styled from 'styled-components';
import { useState, ChangeEvent } from 'react';

interface PropsFilter {
  optionsList: String[];
  name: string;
  onChange: (value: string) => void;
}

const Selector = styled(Select)`
  background: white;
`;

export default function FilterData(props: PropsFilter) {
  const [option, setOptions] = useState<String>('');
  var selectChange = (event: ChangeEvent<{ value: string }>): void => {
    setOptions(event.target.value);
    props.onChange(event.target.value);
  };
  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="platform">{props.name}</InputLabel>
      <Selector
        labelId="select-option"
        id={props.name}
        value={option}
        label="option"
        autoWidth
        // @ts-ignore
        onChange={selectChange}
      >
        <MenuItem value="" sx={{ height: 3 }}>
          <em>All</em>
        </MenuItem>
        {props.optionsList.map((element, index) => (
          // @ts-ignore
          <MenuItem key={index} value={element}>
            {element}
          </MenuItem>
        ))}
      </Selector>
    </FormControl>
  );
}
