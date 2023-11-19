import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
//import components

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}></Route>
)
