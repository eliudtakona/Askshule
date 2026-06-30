import { Routes, Route } from 'react-router-dom'
import Landing         from './pages/Landing'
import Admin           from './pages/Admin'
import SchoolBotDemo   from './pages/SchoolBotDemo'
import SchoolLeads     from './pages/SchoolLeads'
import SchoolInfo      from './pages/SchoolInfoDynamic'

export default function App() {
  return (
    <Routes>
      {/* Public marketing page — askshule.com */}
      <Route path="/" element={<Landing />} />

      {/* Owner-only admin dashboard — askshule.com/admin */}
      <Route path="/admin" element={<Admin />} />

      {/* Per-school dashboards — askshule.com/school/<slug> */}
      <Route path="/school/:slug"        element={<SchoolBotDemo />} />
      <Route path="/school/:slug/leads"  element={<SchoolLeads />} />
      <Route path="/school/:slug/info"   element={<SchoolInfo />} />
    </Routes>
  )
}
