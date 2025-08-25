import { Grid, Stack, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import TextInput from '@/components/ui/TextInput';

function OwnerInformation() {
  return (
    <Stack spacing={1} width={'100%'}>
      <Grid container spacing={1}>
        <PersonIcon
          sx={{
            fontSize: 30,
          }}
        />
        <Typography variant="h5">Titular</Typography>
      </Grid>
      <Typography variant="subtitle2" color="text.secondary">
        Nombre del propietario de la marca
      </Typography>
      <Grid container direction={'column'}>
        <Grid size={12}>
          <TextInput name="owner" label="Nombre del titular" type="text" />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default OwnerInformation;
