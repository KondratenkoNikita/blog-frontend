import React, { memo } from 'react';
import {
  Typography,
  Input,
} from '@material-ui/core';
import { BaseInputType } from './declarations';

const BaseInput: React.FC<BaseInputType> = ({
  value,
  label,
  textHelper,
  inputClass,
  helperClass,
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
  error = false,
}: BaseInputType): React.ReactElement<BaseInputType> => (
  <>
    <Typography variant="subtitle1">
      {label}
    </Typography>
    <Input
      disableUnderline
      error={error}
      value={value}
      onBlur={onBlur}
      onClick={onClick}
      onChange={(event) => onChange(event)}
      classes={{ root: inputClass }}
    />
    <Typography
      variant="subtitle1"
      className={helperClass}
    >
      {textHelper}
    </Typography>
  </>
);

export default memo(BaseInput);
