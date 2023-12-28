import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import Home from './components/Home.tsx'
import SeedPlant from './components/SeedPlant.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route path="" element={<Home />} />
  </Route>
)
