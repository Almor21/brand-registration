import React from 'react';

import { Chip, Grid, IconButton } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Brand } from '@/interfaces/Brand';

function useBrandColums(
  handleEdit: (data: Brand) => void,
  handleDelete: (data: Brand) => void,
) {
  const brandColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Marca',
      flex: 1,
      headerAlign: 'center',
    },
    {
      field: 'description',
      headerName: 'Descripcion',
      flex: 1.5,
      headerAlign: 'center',
    },
    {
      field: 'owner',
      headerName: 'Titular',
      flex: 1,
      headerAlign: 'center',
    },
    {
      field: 'state',
      headerName: 'Estado',
      flex: 1,
      headerAlign: 'center',
      renderCell: (params) => {
        const isActive = params?.row?.state === 'active';
        return (
          <Chip
            label={isActive ? 'Activo' : 'Inactivo'}
            sx={{
              width: 100,
            }}
          />
        );
      },
    },
    {
      field: '',
      headerName: 'Acciones',
      flex: 0.8,
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <Grid container justifyContent={'center'}>
            <IconButton onClick={() => handleEdit(params?.row)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(params?.row)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        );
      },
    },
  ];

  return brandColumns;
}

export default useBrandColums;
