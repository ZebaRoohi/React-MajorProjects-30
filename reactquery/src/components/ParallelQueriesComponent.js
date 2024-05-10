import React from 'react';
import { useQuery } from 'react-query';

const fetchUserData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const userData = await response.json();
  return userData;
};

const fetchPostData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const postData = await response.json();
  return postData;
};

function ParallelQueriesComponent() {
  const { data: userData, isLoading: isLoadingUser } = useQuery('user', fetchUserData);
  const { data: postData, isLoading: isLoadingPosts } = useQuery('posts', fetchPostData);

  if (isLoadingUser || isLoadingPosts) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Data: {JSON.stringify(userData)}</h1>
      <h1>Post Data: {JSON.stringify(postData)}</h1>
    </div>
  );
}

export default ParallelQueriesComponent;
