import { useState, useEffect } from 'react';
import { createAPI } from 'services/api';

const api = createAPI();

const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await api.get(url);
        setData(response.data);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setError(null);
    };
  }, [url])

  return { data, isLoading, error }
};

export default useFetch;
