import httpClient from './httpClient';
import { Motorcycle } from '../types/motorcycle';

export default async function editMotorcycle(
  motorcycle: Motorcycle
): Promise<void> {
  const res = await httpClient.put(`/motorcycles/${motorcycle.id}`, {
    code: motorcycle.code,
    model: motorcycle.model,
    color: motorcycle.color,
    value: motorcycle.value,
    status: motorcycle.status,
  });
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
}
