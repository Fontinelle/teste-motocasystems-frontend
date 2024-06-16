'use client';
import Header from './components/Header';
import ListMotorcycles from './components/ListMotorcycles';
import { useEffect, useState } from 'react';
import { Motorcycles } from './types/motorcycle';
import listMotorcycles from './services/listMotorcycles';

export default function Home() {
  const [motorcycles, setMotorcycles] = useState<Motorcycles>([]);

  const [filteredMotorcycles, setFilteredMotorcycles] = useState<Motorcycles>(
    []
  );
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchMotorcycles = async () => {
      const data = await listMotorcycles();
      setMotorcycles(data);
    };
    fetchMotorcycles();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMotorcycles(motorcycles);
    } else {
      const filtered = motorcycles.filter(
        (item) =>
          item.code.includes(searchTerm) ||
          item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.value.includes(searchTerm) ||
          item.status.includes(searchTerm)
      );
      setFilteredMotorcycles(filtered);
    }
  }, [searchTerm, motorcycles]);

  return (
    <div>
      <Header />
      <ListMotorcycles
        filteredMotorcycles={filteredMotorcycles}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
