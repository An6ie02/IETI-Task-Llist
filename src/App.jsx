import React, { Suspense } from 'react'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { } from '@chakra-ui/react';

import { Header } from './components/Header'

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const TasksPage = React.lazy(() => import("./pages/TasksPage"));

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
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
    </ChakraProvider>
  )
}

export default App
