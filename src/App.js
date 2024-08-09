import React, { useState } from 'react';
import Grid from './components/Grid';
import Toolbar from './components/Toolbar';
import SearchFilter from './components/SearchFilter';
import Pagination from './components/Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    // Implement search logic here
  };

  return (
    <div className="container mx-auto p-4">
      <Toolbar />
      <SearchFilter onSearch={handleSearch} />
      <Grid />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
