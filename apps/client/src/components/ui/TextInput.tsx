import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

function TextInput(props: TextFieldProps) {
  const { control, register } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name: props.name || '', control });

  return (
    <TextField
      {...register(props.name || '')}
      {...props}
      margin="dense"
      variant="outlined"
      fullWidth
      error={!!error}
      helperText={error?.message}
    />
  );
}

export default TextInput;
