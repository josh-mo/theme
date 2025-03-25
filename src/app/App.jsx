import { lazy, Suspense } from 'react'
import { useLocation } from './hooks/useClient'
import { TranslationProvider } from './contexts/TranslationProvider'

const TicketSideBar = lazy(() => import('./locations/TicketSideBar'))
const Modal = lazy(() => import('./locations/Modal'))
const TopBar = lazy(() => import('./locations/TopBar'))
const NavBar = lazy(() => import('./locations/NavBar'))
const UserSideBar = lazy(() => import('./locations/UserSideBar')) 
const OrganizationSideBar = lazy(() => import('./locations/OrganizationSideBar'))
const TicketEditor = lazy(() => import('./locations/TicketEditor'))
const LOCATIONS = {
  ticket_sidebar: TicketSideBar,
  ticket_editor: TicketEditor,
  user_sidebar: UserSideBar,  
  organization_sidebar: OrganizationSideBar,
  top_bar: TopBar,
  nav_bar: NavBar,
  modal: Modal,
  default: () => null
}

function App() {
  const location = useLocation()
  const Location = LOCATIONS[location] || LOCATIONS.default

  return (
    <TranslationProvider>
      <Suspense fallback={<span>Loading...</span>}>
        <Location />
      </Suspense>
    </TranslationProvider>
  )
}

export default App
