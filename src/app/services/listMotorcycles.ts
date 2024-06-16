import { Motocycles } from '../types/motocycle';
import httpClient from './httpClient';

export default async function listMotorcycles(): Promise<Motocycles> {
  const res = await httpClient.get(`/motorcycles`);
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}
