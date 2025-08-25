'use client';

import { Box, Button, Stack } from '@mui/material';
import React from 'react';

function NavButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        borderRadius: '50%',
        backgroundColor: 'white',
        minWidth: 50,
        minHeight: 50,
        boxShadow: '0px 3px 5px 1px rgba(0,0,0,0.2)',
        position: 'fixed',
        top: 20,
        left: 20,
        cursor: 'pointer',
        padding: 0,
      }}
    >
      <Stack justifyContent={'center'} alignItems="center" spacing={0.5}>
        <Box
          sx={{
            width: 30,
            height: 3.5,
            backgroundColor: 'black',
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 3.5,
            backgroundColor: 'black',
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 3.5,
            backgroundColor: 'black',
            borderRadius: 1,
          }}
        />
      </Stack>
    </Button>
  );
}

export default NavButton;
