'use client';

import {
  Button,
  Card,
  Grid,
  Stack,
  Step,
  Stepper,
  Typography,
} from '@mui/material';
import React from 'react';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import useRegister from './hooks/useRegister';
import BrandInformation from './components/BrandInformation';
import { FormProvider } from 'react-hook-form';
import OwnerInformation from './components/OwnerInformation';
import ReviewInformation from './components/ReviewInformation';
import toast from 'react-hot-toast';

const steps = [
  {
    title: 'Marca',
    icon: (
      <DescriptionIcon
        sx={{
          fontSize: 35,
        }}
      />
    ),
    description: 'Nombre y descripción de la marca',
  },
  {
    title: 'Titular',
    icon: (
      <PersonIcon
        sx={{
          fontSize: 35,
        }}
      />
    ),
    description: 'Nombre del propietario',
  },
  {
    title: 'Revisar y enviar',
    icon: (
      <CheckIcon
        sx={{
          fontSize: 35,
        }}
      />
    ),
    description: 'Revisar y crear la marcas',
  },
];

function Register() {
  const { activeStep, handleSteps, methods, info, handleCreateBrand } =
    useRegister();
  return (
    <Stack spacing={5} width={'100%'}>
      <Grid container alignItems={'center'} spacing={2}>
        <CreateNewFolderIcon
          sx={{
            fontSize: 55,
          }}
        />
        <Stack>
          <Typography variant="h2" fontWeight={600}>
            Crear Marca
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" fontSize={18}>
            Maneja y lleva registro de tus marcas
          </Typography>
        </Stack>
      </Grid>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={null}
        sx={{
          display: 'flex',
          gap: '100px',
          justifyContent: 'space-between',
        }}
      >
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <Stack alignItems={'center'}>
                <Grid
                  container
                  border={'2px solid black'}
                  borderRadius={'50%'}
                  padding={1.5}
                  sx={{
                    backgroundColor: index <= activeStep ? 'black' : 'white',
                    color: index <= activeStep ? 'white' : 'black',
                  }}
                  mb={1.4}
                >
                  {step.icon}
                </Grid>
                <Typography variant="h6">{step.title}</Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  textAlign={'center'}
                >
                  {step.description}
                </Typography>
              </Stack>
            </Step>
          );
        })}
      </Stepper>
      <Grid container justifyContent={'center'} width={'100%'}>
        <Card
          sx={{
            maxWidth: 1000,
            width: 1000,
            boxShadow: '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)',
            padding: 5,
          }}
        >
          <FormProvider {...methods}>
            {activeStep === 0 && <BrandInformation />}
            {activeStep === 1 && <OwnerInformation />}
            {activeStep === 2 && <ReviewInformation info={info} />}
          </FormProvider>
          <Grid container justifyContent={'flex-end'} mt={5} spacing={2}>
            <Button
              variant="contained"
              onClick={() => handleSteps('back')}
              sx={{
                width: '120px',
              }}
            >
              Atras
            </Button>
            <Button
              variant="contained"
              onClick={async () => {
                if (activeStep !== 2) {
                  handleSteps('next');
                } else {
                  methods.handleSubmit(handleCreateBrand)();
                  if (!methods.formState.isValid) {
                    toast.error('Por favor completa los campos.');
                  }
                }
              }}
              sx={{
                width: '120px',
              }}
            >
              {activeStep === 2 ? 'Enviar' : 'Siguiente'}
            </Button>
          </Grid>
        </Card>
      </Grid>
    </Stack>
  );
}

export default Register;
