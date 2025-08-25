import { Chip, Grid, Stack, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import React from 'react';
import { CreateBrand } from '@/interfaces/CreateBrand';

function ReviewInformation({ info }: { info: CreateBrand }) {
  return (
    <Stack spacing={1} width={'100%'}>
      <Grid container spacing={1}>
        <CheckIcon
          sx={{
            fontSize: 30,
          }}
        />
        <Typography variant="h5">Revisar y enviar</Typography>
      </Grid>
      <Typography variant="subtitle2" color="text.secondary">
        Revisar y crear la marca
      </Typography>
      <Grid container direction={'column'} spacing={2}>
        <Typography>
          Nombre: <strong>{info.name}</strong>
        </Typography>
        <Typography>
          Propietario: <strong>{info.owner}</strong>
        </Typography>
        <Typography>
          Descripción: <strong>{info.description}</strong>
        </Typography>
        <Grid container spacing={1} alignItems={'center'}>
          <Typography>Estado:</Typography>
          <Chip
            label={'Activo'}
            sx={{
              width: 100,
            }}
          />
        </Grid>
        <Typography>
          Fecha de Creacion:{' '}
          <strong>{new Date().toISOString().split('T')[0]}</strong>
        </Typography>
      </Grid>
    </Stack>
  );
}

export default ReviewInformation;
