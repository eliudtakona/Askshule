export default function Dashboard() {
  const leads = [
    { name: "Wanjiku Kamau",  grade: "Grade 4", phone: "+254 722 ***", status: "hot",  date: "Today" },
    { name: "Brian Omondi",   grade: "PP2",      phone: "+254 711 ***", status: "warm", date: "Today" },
    { name: "Fatuma Hassan",  grade: "Grade 8",  phone: "+254 733 ***", status: "warm", date: "Yesterday" },
    { name: "Peter Mwangi",   grade: "Grade 6",  phone: "+254 700 ***", status: "cold", date: "Yesterday" },
    { name: "Aisha Njoroge",  grade: "Grade 10", phone: "+254 712 ***", status: "hot",  date: "2 days ago" },
  ]
  const colors = { hot: ["#ffebee","#c62828"], warm: ["#fff8e1","#e65100"], cold: ["#e3f2fd","#1565c0"] }
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>
        Leads Dashboard
      </div>
      <div style={{ fontSize: 12, color: '#64748B', marginBottom: 16 }}>
        Grove Creek School · Live parent inquiries
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 16 }}>
        {[
          { label: "Total Leads",    value: leads.length, icon: "💬" },
          { label: "Hot Leads",      value: leads.filter(l=>l.status==="hot").length, icon: "🔥" },
          { label: "Converted",      value: 3, icon: "✅" },
          { label: "Conv. Rate",     value: "34%", icon: "📈" },
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
      {leads.map((lead,i) => {
        const [bg,fg] = colors[lead.status]
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
