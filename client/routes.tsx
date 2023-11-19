import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    {/* <Route index element={< />} /> */}
  </Route>
)
