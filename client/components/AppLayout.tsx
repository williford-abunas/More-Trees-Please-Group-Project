import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'

export default function AppLayout() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  )
}
