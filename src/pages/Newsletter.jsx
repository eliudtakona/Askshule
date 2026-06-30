import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSchool, getNewsletters } from '../data/schools'
import SchoolNavBar from '../components/SchoolNavBar'

export default function Newsletter() {
  const { slug } = useParams()
  const school = getSchool(slug)
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [broadcast, setBroadcast] = useState(true)
  const [posted, setPosted] = useState(false)

  if (!school) return null
  const newsletters = getNewsletters(school)

  const handlePost = () => {
    if (!title || !body) return
    // In production this calls an API to save + trigger WhatsApp broadcast.
    setPosted(true)
    setTimeout(() => {
      setShowForm(false)
      setPosted(false)
      setTitle(""); setBody(""); setBroadcast(true)
    }, 1800)
  }

  return (
    <div>
      <SchoolNavBar school={school} />
      <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16, color: '#0F172A' }}>📰 Newsletter</div>
          <div style={{ fontSize: 12, color: '#64748B' }}>{school.name} · Termly & midterm announcements</div>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          style={{
            background: '#128C7E', color: '#fff', border: 'none', borderRadius: 8,
            padding: '8px 14px', fontSize: 12, fontWeight: 700, cursor: 'pointer', flexShrink: 0
          }}>
          {showForm ? '✕ Cancel' : '+ New Issue'}
        </button>
      </div>

      {showForm && (
        <div style={{
          background: '#fff', borderRadius: 12, padding: 14, marginTop: 14,
          border: '1.5px solid #E2E8F0'
        }}>
          {posted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#166534' }}>
                Newsletter Posted{broadcast ? ' & Broadcast Sent' : ''}!
              </div>
            </div>
          ) : (
            <>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#128C7E', marginBottom: 10 }}>New Newsletter Issue</div>

              <label style={{ fontSize: 11, color: '#64748B', display: 'block', marginBottom: 4 }}>Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)}
                placeholder="e.g. Term 1 2026 — Welcome Back & Key Dates"
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #E2E8F0', borderRadius: 8, fontSize: 12, marginBottom: 10, boxSizing: 'border-box' }} />

              <label style={{ fontSize: 11, color: '#64748B', display: 'block', marginBottom: 4 }}>Message</label>
              <textarea value={body} onChange={e => setBody(e.target.value)}
                placeholder="Term dates, fee reminders, events, midterm break info..."
                rows={6}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #E2E8F0', borderRadius: 8, fontSize: 12, marginBottom: 12, boxSizing: 'border-box', fontFamily: 'inherit', resize: 'vertical' }} />

              <div onClick={() => setBroadcast(!broadcast)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14,
                  background: '#F8FAFC', borderRadius: 8, padding: '8px 12px', cursor: 'pointer'
                }}>
                <div style={{
                  width: 36, height: 20, borderRadius: 10, background: broadcast ? '#25D366' : '#CBD5E1',
                  position: 'relative', transition: 'background 0.2s', flexShrink: 0
                }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#fff', position: 'absolute', top: 2, left: broadcast ? 18 : 2, transition: 'left 0.2s' }} />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0F172A' }}>Broadcast via WhatsApp</div>
                  <div style={{ fontSize: 10, color: '#94A3B8' }}>Send instantly to all parents, not just bot menu</div>
                </div>
              </div>

              <button onClick={handlePost}
                style={{
                  width: '100%', padding: '11px 0', borderRadius: 8, border: 'none',
                  background: 'linear-gradient(135deg,#075E54,#128C7E)', color: '#fff',
                  fontSize: 13, fontWeight: 700, cursor: 'pointer'
                }}>
                {broadcast ? '📢 Post & Broadcast Now' : '📝 Post to Bot Menu Only'}
              </button>
            </>
          )}
        </div>
      )}

      <div style={{ marginTop: 18 }}>
        {newsletters.length === 0 && (
          <div style={{ textAlign: 'center', padding: 30, color: '#94A3B8', fontSize: 13 }}>
            No newsletters posted yet.
          </div>
        )}
        {newsletters.map((n) => (
          <div key={n.id} style={{
            background: '#fff', borderRadius: 12, padding: '16px', marginBottom: 12,
            border: '1.5px solid #E2E8F0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>📰</span>
              <span style={{ fontSize: 10, color: '#94A3B8' }}>{n.date}</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#0F172A', marginBottom: 6 }}>{n.title}</div>
            <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.7 }}>{n.body}</div>
            {n.broadcast && (
              <div style={{ fontSize: 10, color: '#25D366', marginTop: 10, fontWeight: 600 }}>
                📢 Broadcast sent to all parents
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
