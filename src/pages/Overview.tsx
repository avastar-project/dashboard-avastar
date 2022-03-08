import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useState } from 'react';

export default function Overview() {
  const [platform, setPlatform] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value as string);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>My identity</h1>
        {/* Platform select element */}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="overview-platform-label">Platform</InputLabel>
          <Select
            labelId="overview-platform-label"
            id="overview-platform"
            value={platform}
            label="platform"
            onChange={handleChange}
          >
            <MenuItem value="facebook">Facebook</MenuItem>
            <MenuItem value="google">Google</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
