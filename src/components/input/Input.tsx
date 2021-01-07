import React, { memo } from 'react';
import { TextField } from '@material-ui/core';

const Input = () => (
  <>
    <TextField
      id="outlined-helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
      variant="outlined"
    />
  </>
);

export default memo(Input);
