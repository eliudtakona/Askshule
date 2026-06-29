export default function BizPlan() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>
        Business Plan
      </div>
      <div style={{ fontSize: 12, color: '#64748B', marginBottom: 16 }}>
        AskShule · Revenue Model & Go-To-Market Strategy
      </div>
      {[
        { icon: "🏫", label: "Target Market",    value: "14,000+ private schools in Kenya" },
        { icon: "💰", label: "Year 1 Revenue",   value: "KES 17.1M" },
        { icon: "📈", label: "Year 3 Revenue",   value: "KES 159.6M" },
        { icon: "🎯", label: "Year 1 Schools",   value: "150 schools" },
        { icon: "📊", label: "LTV per School",   value: "KES 228,000" },
        { icon: "⚡", label: "LTV:CAC Ratio",    value: "26.8x" },
      ].map((s,i) => (
        <div key={i} style={{
          background:'#fff', borderRadius:12, padding:'14px 16px',
          marginBottom:8, border:'0.5px solid #E2E8F0',
          display:'flex', alignItems:'center', gap:14
        }}>
          <span style={{ fontSize:24 }}>{s.icon}</span>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11, color:'#64748B' }}>{s.label}</div>
            <div style={{ fontSize:16, fontWeight:700, color:'#0F172A' }}>{s.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
