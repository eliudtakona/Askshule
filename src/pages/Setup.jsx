export default function Setup() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>
        Bot Setup
      </div>
      <div style={{ fontSize: 12, color: '#64748B', marginBottom: 16 }}>
        Configure AskShule for your school
      </div>
      {[
        { label: "School Name",         value: "Grove Creek School" },
        { label: "Location",            value: "Narok Town, Narok County" },
        { label: "Admissions Phone",    value: "+254 703 931032" },
        { label: "WhatsApp Bot Status", value: "🟢 Live" },
        { label: "Meta API Status",     value: "🟢 Connected" },
        { label: "Webhook Status",      value: "🟢 Verified" },
        { label: "Active Term",         value: "Term 1 · 2026" },
        { label: "Subscription Tier",   value: "201–400 students · KES 5,000/term" },
      ].map((s,i) => (
        <div key={i} style={{
          background:'#fff', borderRadius:10, padding:'12px 14px',
          marginBottom:8, border:'0.5px solid #E2E8F0',
          display:'flex', justifyContent:'space-between', alignItems:'center'
        }}>
          <span style={{ fontSize:12, color:'#64748B' }}>{s.label}</span>
          <span style={{ fontSize:12, fontWeight:700, color:'#0F172A' }}>{s.value}</span>
        </div>
      ))}
      <div style={{
        background:'linear-gradient(135deg,#075E54,#128C7E)',
        borderRadius:12, padding:'16px', marginTop:16, textAlign:'center'
      }}>
        <div style={{ color:'#fff', fontWeight:700, fontSize:14, marginBottom:4 }}>
          🤖 AskShule Bot is Live
        </div>
        <div style={{ color:'rgba(255,255,255,0.8)', fontSize:12, marginBottom:12 }}>
          Grove Creek School is receiving parent inquiries automatically
        </div>
        <div style={{
          background:'#25D366', borderRadius:20, padding:'8px 20px',
          display:'inline-block', color:'#fff', fontSize:13, fontWeight:700,
          cursor:'pointer'
        }}
          onClick={() => window.open('https://wa.me/254703931032','_blank')}
        >
          💬 Test the Bot Now
        </div>
      </div>
    </div>
  )
}
