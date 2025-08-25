import { Switch, SwitchProps } from '@mui/material';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

function ControlledSwitch(props: SwitchProps) {
  const { control } = useFormContext();
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({ name: props.name || '', control });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? 'active' : 'deactive');
  };

  return (
    <Switch
      checked={value === 'active'}
      onChange={handleChange}
      onBlur={onBlur}
      ref={ref}
      {...props}
    />
  );
}

export default ControlledSwitch;
