'use client';

import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import BrandsTable from './components/BrandsTable';
import useBrands from './hooks/useBrands';
import AddIcon from '@mui/icons-material/Add';
import BrandEditDialog from './components/BrandEditDialog';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BrandDeleteDialog from './components/BrandDeleteDialog';

function Brands() {
  const {
    rows,
    methods,
    router,

    handleUpdateBrand,
    handleDeleteBrand,

    openEditDialog,
    isOpenEditDialog,
    closeEditDialog,

    openDeleteDialog,
    isOpenDeleteDialog,
    closeDeleteDialog,
  } = useBrands();

  return (
    <>
      <Stack spacing={3} width={'100%'}>
        <Grid container alignItems={'center'} spacing={2}>
          <CorporateFareIcon
            sx={{
              fontSize: 55,
            }}
          />
          <Stack>
            <Typography variant="h2" fontWeight={600}>
              Marcas
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              fontSize={18}
            >
              Maneja y lleva registro de tus marcas
            </Typography>
          </Stack>
        </Grid>
        <Card
          sx={{
            width: '100%',
            boxShadow: '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          <Stack padding={5} spacing={3}>
            <Grid
              container
              width={'100% '}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Stack>
                <Typography variant="h5" fontWeight={500}>
                  Marcas Registradas
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  fontSize={14}
                >
                  {rows?.length || 0} registradas
                </Typography>
              </Stack>
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                onClick={() => router.push('/register')}
                sx={{ width: 180, height: 40, fontSize: 16 }}
              >
                Nueva Marca
              </Button>
            </Grid>
            <BrandsTable
              rows={rows}
              handleEdit={openEditDialog}
              handleDelete={openDeleteDialog}
            />
          </Stack>
        </Card>
      </Stack>
      <BrandEditDialog
        open={isOpenEditDialog}
        onClose={closeEditDialog}
        onSubmit={handleUpdateBrand}
        methods={methods}
      />
      <BrandDeleteDialog
        open={isOpenDeleteDialog}
        onClose={closeDeleteDialog}
        onSubmit={handleDeleteBrand}
      />
    </>
  );
}

export default Brands;
