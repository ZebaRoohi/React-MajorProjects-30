import React from 'react';

import UpdateComponent from './components/UpdateComponent';
import ParallelQueriesComponent from './components/ParallelQueriesComponent';
import MyComponent from './components/Mycomponent';
import InfiniteScrollComponent from './components/InfiniteScroll';

function App() {
  return (
    <div>
      <h1>React Query Examples</h1>
      <MyComponent />
      <UpdateComponent />
      <ParallelQueriesComponent />
      <InfiniteScrollComponent />
    </div>
  );
}

export default App;
