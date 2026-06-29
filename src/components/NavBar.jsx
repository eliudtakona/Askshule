import { useLocation, useNavigate } from 'react-router-dom'

const LINKS = [
  { path: '/',          icon: '💬', label: 'Bot Demo'  },
  { path: '/dashboard', icon: '📊', label: 'Leads'     },
  { path: '/bizplan',   icon: '💼', label: 'Biz Plan'  },
  { path: '/setup',     icon: '⚙️',  label: 'Setup'    },
]

export default function NavBar() {
  const { pathname } = useLocation()
  const navigate     = useNavigate()
  return (
    <>
      <div style={{
        background: 'linear-gradient(135deg,#075E54,#128C7E)',
        padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10
      }}>
        <div style={{
          width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,.15)',
          display:'flex',alignItems:'center',justifyContent:'center',fontSize:20
        }}>🏫</div>
        <div>
          <div style={{color:'#fff',fontWeight:800,fontSize:18,letterSpacing:'-0.3px'}}>
            ASK<span style={{color:'#25D366'}}>shule</span>
          </div>
          <div style={{color:'rgba(255,255,255,.6)',fontSize:10}}>
            WhatsApp Admissions Bot · askshule.com
          </div>
        </div>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:6}}>
          <div style={{width:7,height:7,borderRadius:'50%',background:'#25D366'}}/>
          <span style={{color:'#25D366',fontSize:11,fontWeight:600}}>Live</span>
        </div>
      </div>
      <div style={{
        display:'flex', background:'#fff',
        borderBottom:'1px solid #e9ecef', position:'sticky', top:0, zIndex:100
      }}>
        {LINKS.map(l => {
          const active = pathname === l.path
          return (
            <button key={l.path} onClick={() => navigate(l.path)}
              style={{
                flex:1, padding:'11px 0', border:'none', background:'transparent',
                cursor:'pointer', fontSize:12, fontWeight: active ? 700 : 400,
                color: active ? '#128C7E' : '#6c757d',
                borderBottom: active ? '2.5px solid #128C7E' : '2.5px solid transparent',
                transition:'all .15s'
              }}>
              <span style={{display:'block',fontSize:16,marginBottom:2}}>{l.icon}</span>
              {l.label}
            </button>
          )
        })}
      </div>
    </>
  )
}
