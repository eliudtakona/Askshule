// ═══════════════════════════════════════════════════════════════════════════
//  SMARTshule — WhatsApp Webhook Server
//  Handles incoming WhatsApp messages and sends automated replies.
//  Deploy this as a separate Node.js service (Railway, Render, or VPS).
// ═══════════════════════════════════════════════════════════════════════════

import express  from 'express'
import axios    from 'axios'
import 'dotenv/config'

const app  = express()
app.use(express.json())

const {
  WHATSAPP_TOKEN,
  WHATSAPP_PHONE_NUMBER_ID,
  WHATSAPP_VERIFY_TOKEN,
  ADMIN_WHATSAPP,
  PORT = 8080,
} = process.env

// ── In-memory lead store (replace with a DB like Supabase/PlanetScale) ──
const leads = []

// ── WhatsApp API helper ─────────────────────────────────────────────────
async function sendWA(to, text) {
  if (!WHATSAPP_TOKEN) {
    console.log(`[DEV] Would send to ${to}: ${text.slice(0, 80)}...`)
    return
  }
  await axios.post(
    `https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text, preview_url: false },
    },
    { headers: { Authorization: `Bearer ${WHATSAPP_TOKEN}`, 'Content-Type': 'application/json' } }
  )
}

// ── Bot reply logic ─────────────────────────────────────────────────────
function getReply(incoming) {
  const msg = incoming.toLowerCase().trim()

  // Greetings
  if (/^(hi|hello|hallo|habari|hey|good|sasa|jambo|1)/.test(msg)) {
    return `👋 *Habari!* Welcome to *Greenvalley Academy Narok* admissions!\n\nI'm SMARTshule, your digital admissions guide. Reply with a number:\n\n1️⃣ Fee Structure\n2️⃣ Admission Process\n3️⃣ Book a School Visit\n4️⃣ Transport & Boarding\n5️⃣ Term Dates\n6️⃣ Location & Contacts\n7️⃣ Apply Now\n8️⃣ Talk to an Officer`
  }
  if (msg === '1' || /fee|bei|cost|pric/.test(msg)) {
    return `💰 *Fee Structure 2025/2026*\n\nPP1–PP2:       KES 28,500/term\nGrade 1–3:     KES 32,000/term\nGrade 4–6:     KES 36,000/term\nGrade 7–9:     KES 42,000/term\nGrade 10–12:   KES 48,000/term\n\nLunch: KES 4,500/term extra\nAcceptance deposit: KES 15,000\n\nReply *MENU* for more options.`
  }
  if (msg === '2' || /admission|join|enrol|apply/.test(msg)) {
    return `📋 *Admission Process*\n\n1️⃣ Fill inquiry form\n2️⃣ Entry assessment (free)\n3️⃣ Offer letter in 3 days\n4️⃣ Pay KES 15,000 deposit\n5️⃣ Orientation day\n\nReply *APPLY* to start your application now, or *MENU* for other options.`
  }
  if (msg === '3' || /visit|tour|come|see/.test(msg)) {
    return `🏫 *Book a School Visit*\n\nTours: Mon–Fri 9am–12pm | Sat 9am–11am\n\nPlease send us:\n📛 Your name\n📞 Phone number\n📅 Preferred date\n\nWe'll confirm your slot within 1 hour!`
  }
  if (msg === '4' || /transport|bus|route|boarding/.test(msg)) {
    return `🚌 *Transport & Boarding*\n\n*Bus Routes (per term):*\nRoute A – Town CBD / London / Majengo:   KES 5,500\nRoute B – Milimani / Korea / Cereals:    KES 5,500\nRoute C – Adams / Waterhole / Olpopong: KES 6,000\nRoute D – Total / Mwamba / Kamoja:      KES 5,500\nRoute E – University / Utawala / Lopito: KES 6,000\n\n🏠 *Boarding (Gr 7–12):*\nFull boarding: KES 35,000/term\nHalf boarding: KES 22,000/term\n\nReply *MENU* for more options.`
  }
  if (msg === '5' || /term|date|holiday|open|clos|midterm/.test(msg)) {
    return `📅 *Term Dates 2026*\n\n*Term 1:*\nOpens:   Mon 5 Jan\nMidterm: 13–23 Feb\nCloses:  Fri 3 Apr\n\n*Term 2:*\nOpens:   Mon 27 Apr\nMidterm: 12–22 Jun\nCloses:  Fri 31 Jul\n\n*Term 3:*\nOpens:   Mon 24 Aug\nMidterm: 2–12 Oct\nCloses:  Fri 6 Nov\n\nReply *MENU* for more options.`
  }
  if (msg === '6' || /location|where|map|direction|address/.test(msg)) {
    return `📍 *Find Us*\n\n🏫 Greenvalley Academy Narok\nKaren Road, off Ngong Road\nKaren, Nairobi\n\n📞 +254 700 123 456\n📧 admissions@greenvalleyacademy.ac.ke\n\nGoogle Maps: https://maps.google.com/?q=Karen+Nairobi\n\n⏰ Office: Mon–Fri 7:30am–5pm | Sat 8am–1pm`
  }
  if (msg === '7' || /apply|form|register|applic/.test(msg)) {
    return `✍️ *Apply Now*\n\nPlease send us the following:\n\n1️⃣ Parent/Guardian name\n2️⃣ Child's full name\n3️⃣ Grade applying for\n4️⃣ Your phone number\n5️⃣ Your email address\n\nOnce received, our admissions team will contact you within 24 hours. 🎉`
  }
  if (msg === '8' || /human|officer|person|staff|talk|call/.test(msg)) {
    return `👤 *Talk to an Admissions Officer*\n\n📞 Call us: *+254 700 123 456*\n⏰ Mon–Fri 8am–5pm | Sat 8am–12pm\n\nOr send your name and phone number and we'll call you back within 2 hours during working hours.`
  }
  if (/menu|back|start|restart/.test(msg)) {
    return `🔙 *Main Menu*\n\nReply with a number:\n\n1️⃣ Fee Structure\n2️⃣ Admission Process\n3️⃣ Book a School Visit\n4️⃣ Transport & Boarding\n5️⃣ Term Dates\n6️⃣ Location & Contacts\n7️⃣ Apply Now\n8️⃣ Talk to an Officer`
  }
  // Default fallback
  return `👋 I didn't quite get that. Reply *MENU* to see all options, or call us directly at *+254 700 123 456*.`
}

// ── Webhook verification (Meta requires this) ───────────────────────────
app.get('/api/webhook', (req, res) => {
  const mode      = req.query['hub.mode']
  const token     = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']
  if (mode === 'subscribe' && token === WHATSAPP_VERIFY_TOKEN) {
    console.log('✅ Webhook verified by Meta')
    return res.status(200).send(challenge)
  }
  res.sendStatus(403)
})

// ── Incoming message handler ────────────────────────────────────────────
app.post('/api/webhook', async (req, res) => {
  res.sendStatus(200) // Always respond 200 first (Meta requirement)

  const body = req.body
  if (body.object !== 'whatsapp_business_account') return

  const entry   = body.entry?.[0]
  const changes = entry?.changes?.[0]
  const value   = changes?.value
  const messages = value?.messages

  if (!messages?.length) return

  const msg    = messages[0]
  const from   = msg.from          // sender's phone number
  const text   = msg.text?.body || ''
  const name   = value?.contacts?.[0]?.profile?.name || 'Parent'

  console.log(`📩 From ${name} (${from}): ${text}`)

  // Detect lead info pattern (name + grade + phone response)
  if (/grade|pp[12]|form \d/.test(text.toLowerCase())) {
    const lead = { name, phone: from, message: text, timestamp: new Date().toISOString() }
    leads.push(lead)
    console.log('🎯 New lead captured:', lead)
    // Notify admin
    if (ADMIN_WHATSAPP) {
      await sendWA(ADMIN_WHATSAPP, `🎯 *New Admission Lead*\n\n👤 ${name}\n📞 ${from}\n📝 "${text}"\n⏰ ${new Date().toLocaleString('en-KE')}`)
    }
  }

  const reply = getReply(text)
  await sendWA(from, reply)
})

// ── Send message endpoint (used by frontend) ────────────────────────────
app.post('/api/send', async (req, res) => {
  const { to, message } = req.body
  if (!to || !message) return res.status(400).json({ error: 'to and message required' })
  try {
    await sendWA(to, message)
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── Leads endpoint ──────────────────────────────────────────────────────
app.get('/api/leads',       (_req, res) => res.json(leads))
app.post('/api/leads', (req, res) => {
  const lead = { ...req.body, timestamp: new Date().toISOString(), source: 'Web Bot' }
  leads.push(lead)
  if (ADMIN_WHATSAPP) {
    sendWA(ADMIN_WHATSAPP, `🎯 *New Web Lead*\n\n👤 ${lead.parent || lead.name}\n📞 ${lead.phone}\n🎒 ${lead.grade}\n📧 ${lead.email || 'n/a'}`)
  }
  res.json({ success: true, ref: `GVA-${Date.now()}` })
})

// ── Health check ────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }))

app.listen(PORT, () => console.log(`🚀 SMARTshule webhook running on port ${PORT}`))
