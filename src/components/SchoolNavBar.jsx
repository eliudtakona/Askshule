import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function SchoolNavBar({ school }) {
  const { pathname } = useLocation()
  const navigate     = useNavigate()
  const { slug }     = useParams()

  const LINKS = [
    { path: `/school/${slug}`,           icon: '💬', label: 'Bot Demo'   },
    { path: `/school/${slug}/leads`,     icon: '📊', label: 'Leads'      },
    { path: `/school/${slug}/brief`,     icon: '📢', label: 'Daily Brief'},
    { path: `/school/${slug}/news`,      icon: '📰', label: 'Newsletter' },
    { path: `/school/${slug}/info`,      icon: '🏫', label: 'School Info'},
  ]

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
            {school.name} · askshule.com
          </div>
        </div>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:6}}>
          <div style={{width:7,height:7,borderRadius:'50%',background:'#25D366'}}/>
          <span style={{color:'#25D366',fontSize:11,fontWeight:600}}>Live</span>
        </div>
      </div>
      <div style={{
        display:'flex', background:'#fff', overflowX: 'auto',
        borderBottom:'1px solid #e9ecef', position:'sticky', top:0, zIndex:100
      }}>
        {LINKS.map(l => {
          const active = pathname === l.path
          return (
            <button key={l.path} onClick={() => navigate(l.path)}
              style={{
                flex:'1 0 auto', minWidth: 64, padding:'10px 6px', border:'none', background:'transparent',
                cursor:'pointer', fontSize:10.5, fontWeight: active ? 700 : 400,
                color: active ? '#128C7E' : '#6c757d',
                borderBottom: active ? '2.5px solid #128C7E' : '2.5px solid transparent',
                transition:'all .15s', whiteSpace: 'nowrap'
              }}>
              <span style={{display:'block',fontSize:15,marginBottom:2}}>{l.icon}</span>
              {l.label}
            </button>
          )
        })}
      </div>
    </>
  )
}
