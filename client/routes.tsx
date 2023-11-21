import { Route, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './components/AppLayout.tsx'
import Wrapper from './components/Wrapper.tsx'
import Home from './components/Home.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route
      path=""
      element={
        <Wrapper>
          <Home />
        </Wrapper>
      }
    />
  </Route>
)
