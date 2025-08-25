import ControlledSwitch from '@/views/brands/components/ControlledSwitch';
import TextInput from '@/components/ui/TextInput';
import { Button, Dialog, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { UpdateBrand } from '@/interfaces/UpdateBrand';

function BrandEditDialog({
  open,
  onClose,
  onSubmit,
  methods,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: UpdateBrand) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <FormProvider {...methods}>
        <Stack paddingX={5} paddingY={3}>
          <Grid container justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant="h4" paddingY={4}>
              Editar Marca
            </Typography>
            <ControlledSwitch name='state'/>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextInput name="name" label="Nombre de la Marca" type="text" />
            </Grid>
            <Grid size={6}>
              <TextInput name="owner" label="Titular de la Marca" type="text" />
            </Grid>
          </Grid>
          <TextInput
            name="description"
            label="Descripción"
            type="text"
            multiline={true}
            rows={2}
          />
          <Grid container justifyContent={'flex-end'} spacing={2} mt={3}>
            <Button
              variant="contained"
              onClick={methods.handleSubmit(onSubmit)}
            >
              Guardar
            </Button>
            <Button variant="contained" onClick={onClose}>
              Cancelar
            </Button>
          </Grid>
        </Stack>
      </FormProvider>
    </Dialog>
  );
}

export default BrandEditDialog;
