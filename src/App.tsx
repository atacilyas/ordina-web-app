import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from './pages/home/home';
import { NoPage } from './pages/no-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
