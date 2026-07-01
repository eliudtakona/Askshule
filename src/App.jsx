import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Admin from './pages/Admin'
import SchoolBotDemo from './pages/SchoolBotDemo'
import SchoolLeads from './pages/SchoolLeads'
import SchoolInfo from './pages/SchoolInfo'
import DailyBrief from './pages/DailyBrief'
import Newsletter from './pages/Newsletter'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/school/:slug" element={<SchoolBotDemo />} />
      <Route path="/school/:slug/leads" element={<SchoolLeads />} />
      <Route path="/school/:slug/brief" element={<DailyBrief />} />
      <Route path="/school/:slug/news" element={<Newsletter />} />
      <Route path="/school/:slug/info" element={<SchoolInfo />} />
    </Routes>
  )
}
