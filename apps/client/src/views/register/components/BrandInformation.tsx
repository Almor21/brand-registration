import { Grid, Stack, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import React from 'react';
import TextInput from '@/components/ui/TextInput';

function BrandInformation() {
  return (
    <Stack spacing={1} width={'100%'}>
      <Grid container spacing={1}>
        <DescriptionIcon
          sx={{
            fontSize: 30,
          }}
        />
        <Typography variant="h5">Marca</Typography>
      </Grid>
      <Typography variant="subtitle2" color="text.secondary">
        Nombre y descripción de la marca
      </Typography>
      <Grid container direction={'column'}>
        <Grid size={12}>
          <TextInput name="name" label="Nombre de la marca" type="text" />
        </Grid>
        <Grid size={12}>
          <TextInput
            name="description"
            label="Descripción de la marca"
            type="text"
            multiline
            minRows={4}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default BrandInformation;
