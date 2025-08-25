import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteBrand, getBrands, updateBrand } from '../services/service';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editBrandSchema } from '../schemas/editBrand.schema';
import toast from 'react-hot-toast';
import { UpdateBrand } from '@/interfaces/UpdateBrand';
import { Brand } from '@/interfaces/Brand';
import { useRouter } from 'next/navigation';

function useBrands() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [brandSelectedId, setBrandSelectedId] = useState('');

  const { data: rows } = useQuery({
    queryKey: ['getBrands'],
    queryFn: getBrands,
  });

  const updateBrandMutation = useMutation({
    mutationFn: updateBrand,
    onSuccess: () => {
      toast.success('Marca Actualizada.');
      methods.reset();
      closeEditDialog();
      queryClient.invalidateQueries({
        queryKey: ['getBrands'],
      });
    },
    onError: () => {
      toast.error('Error al actualizar la marca.');
      methods.reset();
    },
  });

  const deleteBrandMutation = useMutation({
    mutationFn: deleteBrand,
    onSuccess: () => {
      toast.success('Marca Eliminada.');
      closeDeleteDialog();
      queryClient.invalidateQueries({
        queryKey: ['getBrands'],
      });
    },
    onError: () => {
      toast.error('Error al actualizar la marca.');
    },
  });

  const methods = useForm({
    resolver: yupResolver(editBrandSchema),
    mode: 'onTouched',
  });

  const openEditDialog = (brandSelected: Brand) => {
    setBrandSelectedId(brandSelected.id);
    methods.reset({
      name: brandSelected?.name || '',
      owner: brandSelected?.owner || '',
      description: brandSelected?.description || '',
      state: brandSelected?.state || '',
    });
    setIsOpenEditDialog(true);
  };

  const closeEditDialog = () => {
    setIsOpenEditDialog(false);
    methods.reset();
  };

  const openDeleteDialog = (brandSelected: Brand) => {
    setBrandSelectedId(brandSelected.id);
    setIsOpenDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };

  const handleUpdateBrand = (data: UpdateBrand) => {
    updateBrandMutation.mutate({ id: brandSelectedId, data });
  };

  const handleDeleteBrand = () => {
    deleteBrandMutation.mutate(brandSelectedId);
  };

  return {
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
  };
}

export default useBrands;
