import httpClient from './httpClient';

export default async function deleteMotorcycle(id: string): Promise<void> {
  const res = await httpClient.delete(`/motorcycles/${id}`);
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
}
