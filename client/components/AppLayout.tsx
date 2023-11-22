import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import SeedPlant from './SeedPlant'

export default function AppLayout() {
  return (
    <>
      <main>
        <Header />
        <SeedPlant />
        <Outlet />
      </main>
    </>
  )
}
