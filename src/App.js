import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom'
import React, { Suspense } from 'react'
import NotFound from './components/NotFound';
import Header from './components/Header';
import MainPage from './features/Photo/pages/Main';
import AddEditPage from './features/Photo/pages/AddEdit';

// const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>

        <Router>
          <Header />
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/photos" element={<MainPage />} />
            <Route path="/photos/add" element={<AddEditPage />} />
            <Route path="/photos/:photoId" element={<AddEditPage />} />
            <Route element={<NotFound />} />
            {/* <Route exact path="/" component={Photo} />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} /> */}
          </Routes>
        </Router>

      </Suspense>
    </div>
  );
}

export default App;
