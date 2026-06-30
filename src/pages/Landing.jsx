export default function Landing() {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg,#075E54,#128C7E)',
        padding: '50px 24px 60px', textAlign: 'center'
      }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>🏫</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
          ASK<span style={{ color: '#25D366' }}>shule</span>
        </div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', maxWidth: 320, margin: '12px auto 24px', lineHeight: 1.6 }}>
          Turn WhatsApp inquiries into enrolled students. The admissions bot built for private schools in Kenya.
        </div>
        <div
          onClick={() => window.open('https://wa.me/254708908098?text=Hi%2C%20I%27d%20like%20to%20see%20a%20demo%20of%20AskShule%20for%20my%20school', '_blank')}
          style={{
            background: '#25D366', color: '#fff', borderRadius: 24, padding: '13px 32px',
            display: 'inline-block', fontWeight: 700, fontSize: 14, cursor: 'pointer'
          }}>
          💬 See a Free Demo on WhatsApp
        </div>
      </div>

      {/* Features */}
      <div style={{ padding: '32px 20px' }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: '#0F172A', textAlign: 'center', marginBottom: 20 }}>
          Everything Your Admissions Office Does — Automated
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { icon: "💰", label: "Fee Structure" },
            { icon: "📋", label: "Admissions Flow" },
            { icon: "🏫", label: "Visit Booking" },
            { icon: "🚌", label: "Transport Info" },
            { icon: "📅", label: "Term Dates" },
            { icon: "📊", label: "Leads Dashboard" },
          ].map((f, i) => (
            <div key={i} style={{
              background: '#F8FAFC', borderRadius: 12, padding: '16px 12px',
              textAlign: 'center', border: '0.5px solid #E2E8F0'
            }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{f.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#0F172A' }}>{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: '#F8FAFC', padding: '24px 20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {[
            { val: "24/7", label: "Always Available" },
            { val: "< 3 sec", label: "Reply Time" },
            { val: "34%", label: "Inquiry → Visit Rate" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#128C7E' }}>{s.val}</div>
              <div style={{ fontSize: 11, color: '#64748B' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '32px 20px', textAlign: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: '#0F172A', marginBottom: 8 }}>
          Ready to stop losing students to WhatsApp silence?
        </div>
        <div style={{ fontSize: 13, color: '#64748B', marginBottom: 18 }}>
          From KES 3,000 per term · Setup in under 2 hours
        </div>
        <div
          onClick={() => window.open('https://wa.me/254708908098?text=Hi%2C%20I%27d%20like%20to%20get%20AskShule%20for%20my%20school', '_blank')}
          style={{
            background: '#128C7E', color: '#fff', borderRadius: 24, padding: '13px 32px',
            display: 'inline-block', fontWeight: 700, fontSize: 14, cursor: 'pointer'
          }}>
          📱 Get Started on WhatsApp
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '16px 20px 30px', fontSize: 11, color: '#94A3B8' }}>
        © 2026 AskShule · Infomax Digital Solutions · Narok, Kenya
      </div>
    </div>
  )
}
