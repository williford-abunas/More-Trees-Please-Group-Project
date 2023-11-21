import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import Home from './components/Home.tsx'
import SeedPlant from './components/SeedPlanting.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<SeedPlant />}>
    <Route path="" element={<Home />} />
  </Route>
)
