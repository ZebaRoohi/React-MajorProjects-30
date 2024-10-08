import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
};

function MyComponent() {
  const { data, isLoading, error } = useQuery('myQueryKey', fetchData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data: {JSON.stringify(data)}</h1>
    </div>
  );
}

export default MyComponent;
