import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import useConcretes from '../hooks/useConcretes';
import useSelectConcrete from '../hooks/useSelectConcrete';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 420,
  padding: theme.spacing(2),
  ...theme.typography.body2,
}));

const SelectConcrete = () => {
  const { concretes, error, isLoading } = useConcretes();
  const handleSelectConcrete = useSelectConcrete();

  const handleChange = (event) => {
    handleSelectConcrete(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <DemoPaper variant="outlined" sx={{ maxWidth: 445 }}>
      <Typography variant="h6" gutterBottom>
       Designated Concrete Type
      </Typography>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="concrete-select-label">Select Concrete type</InputLabel>
        <Select
          labelId="concrete-select-label"
          id="concrete-select"
          onChange={handleChange}
        >
          {concretes?.map((concrete) => (
            <MenuItem key={concrete.DesignatedConcrete} value={concrete.DesignatedConcrete}>
              {concrete.DesignatedConcrete}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </DemoPaper>
  );
};

export default SelectConcrete;
