import { useParams } from 'react-router-dom'
import { getSchool } from '../data/schools'

export default function SchoolBotDemo() {
  const { slug } = useParams()
  const school = getSchool(slug)
  if (!school) return null

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <div style={{ fontSize: 40, marginBottom: 16 }}>🏫</div>
      <div style={{ fontSize: 20, fontWeight: 800, color: '#075E54' }}>
        ASK<span style={{ color: '#25D366' }}>shule</span>
      </div>
      <div style={{ fontSize: 14, color: '#666', marginTop: 8, marginBottom: 24 }}>
        WhatsApp Admissions Bot for {school.name}
      </div>
      <div style={{
        background: '#075E54', color: '#fff', borderRadius: 12,
        padding: '14px 28px', display: 'inline-block', fontWeight: 700,
        fontSize: 14, cursor: 'pointer'
      }}
        onClick={() => window.open(`https://wa.me/${school.whatsappNumber}`, '_blank')}
      >
        💬 Chat With Us on WhatsApp
      </div>
      <div style={{ marginTop: 16, fontSize: 12, color: '#999' }}>
        {school.whatsappDisplay} · Available 24/7
      </div>
    </div>
  )
}
