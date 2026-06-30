import { useParams } from 'react-router-dom'
import { getSchool } from '../data/schools'
import SchoolNavBar from '../components/SchoolNavBar'

export default function SchoolInfo() {
  const { slug } = useParams()
  const school = getSchool(slug)
  if (!school) return <div style={{padding:30,textAlign:'center'}}>School not found.</div>

  return (
    <div>
      <SchoolNavBar school={school} />
      <div style={{ padding: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>
          {school.name} — Bot Settings
        </div>
        <div style={{ fontSize: 12, color: '#64748B', marginBottom: 16 }}>
          Your school's AskShule configuration
        </div>
        {[
          { label: "School Name",         value: school.name },
          { label: "Location",            value: school.location },
          { label: "Admissions Phone",    value: school.whatsappDisplay },
          { label: "WhatsApp Bot Status", value: school.status === "Active" ? "🟢 Live" : "🟡 Pending" },
          { label: "Active Term",         value: school.activeTerm },
          { label: "Subscription Tier",   value: school.tier },
          { label: "Term Renewal Date",   value: school.termRenewal },
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
          background:'#fff', borderRadius:10, padding:'14px',
          marginTop:14, border:'0.5px solid #E2E8F0'
        }}>
          <div style={{ fontSize:12, fontWeight:700, color:'#0F172A', marginBottom:8 }}>
            📝 Need to update your school information?
          </div>
          <div style={{ fontSize:12, color:'#64748B', marginBottom:12, lineHeight:1.6 }}>
            To update fees, transport routes, term dates, or any school details, contact your AskShule administrator.
          </div>
          <div
            onClick={() => window.open(`https://wa.me/${school.whatsappNumber}`,'_blank')}
            style={{
              background:'#128C7E', color:'#fff', borderRadius:10,
              padding:'10px 0', textAlign:'center', fontSize:13, fontWeight:700,
              cursor:'pointer'
            }}>
            💬 Contact AskShule Support
          </div>
        </div>
      </div>
    </div>
  )
}
