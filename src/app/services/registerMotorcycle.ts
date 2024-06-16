import { Motorcycle } from '../types/motorcycle';
import { v4 as uuidv4 } from 'uuid';
import httpClient from './httpClient';

export default async function registerMotorcycle(
  motocycle: Motorcycle
): Promise<void> {
  const res = await httpClient.post('/motorcycles', {
    id: uuidv4(),
    code: motocycle.code,
    model: motocycle.model,
    color: motocycle.color,
    value: motocycle.value,
    status: motocycle.status,
  });
  if (res.status !== 201) {
    throw new Error('Failed to fetch data');
  }
}
