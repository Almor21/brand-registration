import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createBrandSchema } from '../schemas/createBrand.schema';
import { useMutation } from '@tanstack/react-query';
import { createBrand } from '../services/service';
import toast from 'react-hot-toast';

function useRegister() {
  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm({
    resolver: yupResolver(createBrandSchema),
    mode: 'onTouched',
  });

  const info = methods.watch();

  const createBrandMutation = useMutation({
    mutationFn: createBrand,
    onSuccess: () => {
      toast.success('Marca Creada.');
      methods.reset();
      setActiveStep(0);
    },
    onError: () => {
      toast.error('Error al crear la marca.');
    },
  });

  const handleSteps = (step: 'next' | 'back') => {
    if (step === 'next' && activeStep < 2) {
      setActiveStep((prev) => prev + 1);
    } else if (step === 'back' && activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleCreateBrand = () => {
    createBrandMutation.mutate({ data: info });
  };

  return { activeStep, handleSteps, methods, info, handleCreateBrand };
}

export default useRegister;
