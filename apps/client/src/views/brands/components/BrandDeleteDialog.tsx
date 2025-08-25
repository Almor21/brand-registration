import ControlledSwitch from '@/views/brands/components/ControlledSwitch';
import { Button, Dialog, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

function BrandDeleteDialog({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Stack paddingX={5} paddingY={3}>
        <Grid container justifyContent={'space-between'}>
          <Typography variant="h4" paddingY={4}>
            Eliminar Marca
          </Typography>
        </Grid>
        <Typography variant="body1">
          ¿Estás seguro de que deseas eliminar esta marca?
        </Typography>
        <Grid container justifyContent={'flex-end'} spacing={2} mt={3}>
          <Button variant="contained" onClick={onSubmit}>
            Aceptar
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancelar
          </Button>
        </Grid>
      </Stack>
    </Dialog>
  );
}

export default BrandDeleteDialog;
