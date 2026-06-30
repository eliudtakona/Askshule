import { useParams } from 'react-router-dom'
import { getSchool } from '../data/schools'

export default function SchoolLeads() {
  const { slug } = useParams()
  const school = getSchool(slug)
  if (!school) return null

  const leads = school.leads || []
  const colors = { hot: ["#ffebee","#c62828"], warm: ["#fff8e1","#e65100"], cold: ["#e3f2fd","#1565c0"] }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>
        My Leads
      </div>
      <div style={{ fontSize: 12, color: '#64748B', marginBottom: 16 }}>
        {school.name} · Parent inquiries from WhatsApp
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 16 }}>
        {[
          { label: "Total Inquiries", value: leads.length, icon: "💬" },
          { label: "Hot Leads",       value: leads.filter(l=>l.status==="hot").length, icon: "🔥" },
        ].map((s,i) => (
          <div key={i} style={{
            background:'#fff', borderRadius:12, padding:'12px 14px',
            border:'0.5px solid #E2E8F0'
          }}>
            <div style={{ fontSize:22 }}>{s.icon}</div>
            <div style={{ fontSize:22, fontWeight:800, color:'#0F172A' }}>{s.value}</div>
            <div style={{ fontSize:11, color:'#64748B' }}>{s.label}</div>
          </div>
        ))}
      </div>
      {leads.length === 0 && (
        <div style={{ textAlign: 'center', padding: 30, color: '#94A3B8', fontSize: 13 }}>
          No leads yet. They will appear here as parents message your WhatsApp bot.
        </div>
      )}
      {leads.map((lead,i) => {
        const [bg,fg] = colors[lead.status] || colors.cold
        return (
          <div key={i} style={{
            background:'#fff', borderRadius:12, padding:'12px 14px',
            marginBottom:8, border:'0.5px solid #E2E8F0',
            display:'flex', alignItems:'center', gap:12
          }}>
            <div style={{
              width:38, height:38, borderRadius:'50%', background:'#e8f5e9',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:16, fontWeight:700, color:'#128C7E', flexShrink:0
            }}>{lead.name[0]}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:600, fontSize:13 }}>{lead.name}</div>
              <div style={{ fontSize:11, color:'#64748B' }}>{lead.grade} · {lead.phone} · {lead.date}</div>
            </div>
            <span style={{
              background:bg, color:fg, borderRadius:12,
              padding:'2px 10px', fontSize:11, fontWeight:600
            }}>
              {lead.status === "hot" ? "🔥 Hot" : lead.status === "warm" ? "⚡ Warm" : "❄️ Cold"}
            </span>
          </div>
        )
      })}
    </div>
  )
}
