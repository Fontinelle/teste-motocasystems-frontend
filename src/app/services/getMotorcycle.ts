import { Motorcycle } from '../types/motorcycle';
import httpClient from './httpClient';

export default async function getMotorcycle(id: string): Promise<Motorcycle> {
  const res = await httpClient.get(`motorcycles/${id}`);
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}
