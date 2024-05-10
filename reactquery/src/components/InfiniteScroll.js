import React from 'react';
import { useInfiniteQuery } from 'react-query';

const fetchPosts = async (pageParam = 1) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`);
  const data = await response.json();
  return data;
};

function InfiniteScrollComponent() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useInfiniteQuery('posts', fetchPosts, {
    getNextPageParam: (lastPage) => lastPage.length > 0 ? lastPage[lastPage.length - 1].id : false,
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default InfiniteScrollComponent;
