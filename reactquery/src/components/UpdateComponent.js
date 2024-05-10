import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

const updateData = async (newData) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({ title: newData }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const updatedData = await response.json();
  return updatedData;
};

function UpdateComponent() {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateData, {
    onSuccess: () => {
      queryClient.invalidateQueries('myQueryKey');
    },
  });

  const handleUpdate = () => {
    mutation.mutate('Updated Title');
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Data</button>
      {mutation.isLoading && <p>Updating...</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </div>
  );
}

export default UpdateComponent;
