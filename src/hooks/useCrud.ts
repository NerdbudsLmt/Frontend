'use client'
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useToast } from "@chakra-ui/react";


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
  // const [refresh, setRefresh] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const toast = useToast();


  const { data: session }: any = useSession();
  const token = session?.user?.accessToken
  console.log(token)


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
      if (response.ok) {
        const responseData = await response.json();
        toast({
          title: "Project created ",
          description: responseData.message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        fetchData();
        console.log(responseData);
      } else {
        toast({
          title: "UNABLE TO CREATE NEW PROJECT, PLS CONTACT THE SUPPORT TEAM",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        throw new Error('Failed to create item');
        console.log("Create project error");
      }
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
  }, [baseUrl]);

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
