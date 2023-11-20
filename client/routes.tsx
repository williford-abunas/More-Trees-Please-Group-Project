import { Route, createRoutesFromElements } from 'react-router-dom'

import Home from './components/Home.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Home />}></Route>
)
