'use client';

import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import NavButton from './NavButton';
import Image from 'next/image';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useRouter } from 'next/navigation';

const options = [
  {
    title: 'Marcas',
    icon: <FormatListBulletedIcon />,
    route: '/',
  },
  {
    title: 'Registro',
    icon: <AppRegistrationIcon />,
    route: '/register',
  },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavButton onClick={toggleDrawer} />
      <Drawer open={open} onClose={toggleDrawer}>
        <Stack marginBottom={2}>
          <Grid container alignItems={'center'}>
            <Image src={'/logo.png'} alt="Logo" width={80} height={80} />
            <Typography>TrademarkHub</Typography>
          </Grid>
          <Divider />
        </Stack>
        <List>
          {options.map((option, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => router.push(option.route)}>
                <Box
                  paddingX={2}
                  width={200}
                  display={'flex'}
                  alignItems={'center'}
                >
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.title} />
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
