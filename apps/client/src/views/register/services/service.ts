import api from '@/https/api';
import { Brand } from '@/interfaces/Brand';
import { CreateBrand } from '@/interfaces/CreateBrand';
import { MutationFunction } from '@tanstack/react-query';

export const createBrand: MutationFunction<
  Brand,
  { data: CreateBrand }
> = async ({ data }: { data: CreateBrand }) => {
  const response = await api.post('/brands', data);
  return response.data.data;
};
