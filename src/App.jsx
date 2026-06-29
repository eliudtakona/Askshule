import { Routes, Route } from 'react-router-dom'
import BotDemo    from './pages/BotDemo'
import Dashboard  from './pages/Dashboard'
import BizPlan    from './pages/BizPlan'
import Setup      from './pages/Setup'
import NavBar     from './components/NavBar'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <NavBar />
      <Routes>
        <Route path="/"          element={<BotDemo />}   />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bizplan"   element={<BizPlan />}   />
        <Route path="/setup"     element={<Setup />}     />
      </Routes>
    </div>
  )
}
