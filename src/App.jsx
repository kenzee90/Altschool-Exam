import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllRepositoryList from './AllRepositoryList';
import SingleRepositoryPage from './SingleRespositoryPage';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AllRepositoryList />} />
        <Route path="/repos/:repoId" element={<SingleRepositoryPage />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
