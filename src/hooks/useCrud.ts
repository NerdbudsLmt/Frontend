'use client'
// hooks/useCrud.ts
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";


interface UseCrudOptions<T> {
  baseUrl: string;
  initialData?: T[];
}

interface UseCrudResult<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
  createItem: (item: T) => Promise<void>;
  updateItem: (id: string, updatedItem: Partial<T>) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
}

function useCrud<T>({ baseUrl, initialData = [] }: UseCrudOptions<T>): UseCrudResult<T> {
  const [data, setData] = useState<T[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);


  const { data: session }: any = useSession();
  const token = session?.user?.accessToken
  console.log(token)
//   const token = () => {
//     // Retrieve authToken from localStorage
//     return localStorage.getItem('authToken');
//   };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setData(result);
      // setRefresh(!refresh)
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (item: T) => {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        throw new Error('Failed to create item');
      }
      fetchData();
    } catch (error) {
      setError(error as Error);
    }
  };

  const updateItem = async (id: string, updatedItem: Partial<T>) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
      fetchData();
    } catch (error) {
      setError(error as Error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      fetchData();
    } catch (error) {
      setError(error as Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [baseUrl, refresh]);

  return {
    data,
    loading,
    error,
    fetchData,
    createItem,
    updateItem,
    deleteItem,
  };
}

export default useCrud;
