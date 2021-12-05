import { useState, useEffect } from 'react';
import { createAPI } from 'services/api';

const api = createAPI();

const useFetch = (url) => {
  const [data, setData] = useState(null);
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
      setData(null);
      setError(null);
    };
  }, [url])

  return { data, isLoading, error }
};

export default useFetch;
