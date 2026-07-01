import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllSchools, getPlatformStats } from '../data/schools'

const ADMIN_PASSWORD = "askshule2026"

export default function Admin() {
  const [unlocked, setUnlocked] = useState(false)
  const [pw, setPw] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const tryUnlock = () => {
    if (pw === ADMIN_PASSWORD) { setUnlocked(true); setError(false) }
    else setError(true)
  }
  if (!unlocked) {
    return (
      <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:20, background:'#F8FAFC' }}>
        <div style={{ background:'#fff', borderRadius:16, padding:'32px 24px', maxWidth:320, width:'100%', textAlign:'center', boxShadow:'0 4px 20px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize:32, marginBottom:12 }}>🔒</div>
          <div style={{ fontWeight:800, fontSize:16, color:'#0F172A', marginBottom:4 }}>Admin Access</div>
          <div style={{ fontSize:12, color:'#64748B', marginBottom:20 }}>askshule.com/admin · Owner only</div>
          <input type="password" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key==='Enter' && tryUnlock()} placeholder="Enter password"
            style={{ width:'100%', padding:'10px 14px', borderRadius:10, border: error ? '1.5px solid #EF4444' : '1.5px solid #E2E8F0', fontSize:13, marginBottom:8, outline:'none', boxSizing:'border-box' }} />
          {error && <div style={{ color:'#EF4444', fontSize:11, marginBottom:10 }}>Incorrect password.</div>}
          <button onClick={tryUnlock}
            style={{ width:'100%', padding:'11px 0', borderRadius:10, border:'none', background:'linear-gradient(135deg,#075E54,#128C7E)', color:'#fff', fontSize:13, fontWeight:700, cursor:'pointer' }}>
            🔓 Unlock
          </button>
        </div>
      </div>
    )
  }
  const schools = getAllSchools()
  const stats = getPlatformStats()
  return (
    <div style={{ background:'#F8FAFC', minHeight:'100vh' }}>
      <div style={{ background:'linear-gradient(135deg,#0A0F1E,#1E3A5F)', padding:'18px 20px' }}>
        <div style={{ color:'#fff', fontWeight:800, fontSize:18 }}>
          ASK<span style={{ color:'#25D366' }}>shule</span>
          <span style={{ color:'#94A3B8', fontWeight:400, fontSize:13 }}> · Admin Dashboard</span>
        </div>
        <div style={{ color:'#64748B', fontSize:11, marginTop:2 }}>askshule.com/admin · All schools</div>
      </div>
      <div style={{ padding:16 }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:10, marginBottom:20 }}>
          {[
            { icon:'🏫', label:'Total Schools', value:stats.totalSchools },
            { icon:'✅', label:'Active Schools', value:stats.activeSchools },
            { icon:'👨‍🎓', label:'Total Students', value:stats.totalStudents.toLocaleString() },
            { icon:'💬', label:'Total Leads', value:stats.totalLeads },
          ].map((s,i) => (
            <div key={i} style={{ background:'#fff', borderRadius:12, padding:14, border:'0.5px solid #E2E8F0' }}>
              <div style={{ fontSize:22 }}>{s.icon}</div>
              <div style={{ fontSize:20, fontWeight:800, color:'#0F172A' }}>{s.value}</div>
              <div style={{ fontSize:11, color:'#64748B' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ fontWeight:700, fontSize:14, color:'#0F172A', marginBottom:10 }}>All Schools ({schools.length})</div>
        {schools.map((s,i) => (
          <div key={i} onClick={() => navigate('/school/'+s.slug)}
            style={{ background:'#fff', borderRadius:12, padding:'12px 14px', marginBottom:8, border:'0.5px solid #E2E8F0', cursor:'pointer', display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:38, height:38, borderRadius:10, background:'#E8F5E9', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>🏫</div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, fontSize:13, color:'#0F172A' }}>{s.name}</div>
              <div style={{ fontSize:11, color:'#64748B' }}>{s.location} · {s.studentCount} students · {s.tier}</div>
              <div style={{ fontSize:10, color:'#94A3B8', marginTop:2 }}>askshule.com/school/{s.slug}</div>
            </div>
            <span style={{ background: s.status==='Active' ? '#DCFCE7' : '#FEF3C7', color: s.status==='Active' ? '#166534' : '#92400E', borderRadius:8, padding:'3px 10px', fontSize:10, fontWeight:700, flexShrink:0 }}>{s.status}</span>
          </div>
        ))}
        <div style={{ background:'#FFFBEB', border:'1px solid #F59E0B', borderRadius:12, padding:'14px 16px', marginTop:16 }}>
          <div style={{ fontWeight:700, fontSize:12, color:'#92400E', marginBottom:6 }}>➕ How to Add a New School</div>
          <div style={{ fontSize:11, color:'#B45309', lineHeight:1.6 }}>
            Open src/data/schools.js on GitHub, copy the TEMPLATE block, paste it below Groove Creek entry, fill in details and commit. School is instantly live at askshule.com/school/their-slug.
          </div>
        </div>
      </div>
    </div>
  )
}
