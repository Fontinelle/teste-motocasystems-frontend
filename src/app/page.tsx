'use client';
import Header from './components/Header';
import ListMotorcycles from './components/ListMotorcycles';
import { useEffect, useState } from 'react';
import { Motocycles } from './types/motocycle';
import listMotorcycles from './services/listMotorcycles';

export default function Home() {
  const [motorcycles, setMotorcycles] = useState<Motocycles>([]);

  const [filteredMotorcycles, setFilteredMotorcycles] = useState<Motocycles>(
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
          item.color.toLowerCase().includes(searchTerm.toLowerCase())
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
