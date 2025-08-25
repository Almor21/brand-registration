import api from '@/https/api';
import { Brand } from '@/interfaces/Brand';
import { UpdateBrand } from '@/interfaces/UpdateBrand';
import { MutationFunction, QueryFunction } from '@tanstack/react-query';

export const getBrands: QueryFunction<Brand[]> = async () => {
  const response = await api.get('/brands');
  return response.data.data;
};

export const updateBrand: MutationFunction<
  Brand,
  { id: string; data: UpdateBrand }
> = async ({ id, data }: { id: string; data: UpdateBrand }) => {
  const response = await api.put(`/brands/${id}`, data);
  return response.data.data;
};

export const deleteBrand: MutationFunction<Brand, string> = async (
  id: string,
) => {
  const response = await api.delete(`/brands/${id}`);
  return response.data.data;
};
