import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useBrandColums from '../hooks/useBrandColums';
import { Brand } from '@/interfaces/Brand';

function BrandsTable({
  rows,
  handleEdit,
  handleDelete,
}: {
  rows?: Brand[];
  handleEdit: (data: Brand) => void;
  handleDelete: (data: Brand) => void;
}) {
  const brandColumns = useBrandColums(handleEdit, handleDelete);

  return (
    <DataGrid
      columns={brandColumns}
      sx={{
        minHeight: 500,
      }}
      rows={rows || []}
      paginationMode="client"
      initialState={{
        pagination: {
          paginationModel: { pageSize: 10 },
          rowCount: brandColumns.length,
        },
      }}
      pageSizeOptions={[10, 20, 50, 100]}
      disableColumnResize
      disableColumnSelector
      disableRowSelectionOnClick
    />
  );
}

export default BrandsTable;
