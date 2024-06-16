import { Motorcycles } from '../types/motorcycle';
import httpClient from './httpClient';

export default async function listMotorcycles(): Promise<Motorcycles> {
  const res = await httpClient.get(`/motorcycles`);
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}
