import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header'
import { Menu } from './components/Menu'

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const TasksPage = React.lazy(() => import("./pages/TasksPage"));

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          } />
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><AboutUsPage /></Suspense>} />
        <Route path="/tasks" element={<Suspense fallback={<div>Loading...</div>}><TasksPage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
