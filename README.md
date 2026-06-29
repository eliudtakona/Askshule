# SMARTshule 🏫

> WhatsApp Admissions & Parent Engagement Bot for Private Schools in Kenya  
> **askshule.com**

---

## 🚀 Quick Start (Local Dev)

```bash
# 1. Clone and install
git clone https://github.com/YOUR_USERNAME/smartshule.git
cd smartshule
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env with your WhatsApp tokens (see setup below)

# 3. Run frontend
npm run dev              # → http://localhost:3000

# 4. Run webhook server (separate terminal)
node api/webhook.js      # → http://localhost:8080
```

---

## ☁️ Deploy to askshule.com (Step by Step)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial SMARTshule deployment"
git remote add origin https://github.com/YOUR_USERNAME/smartshule.git
git push -u origin main
```

### Step 2 — Deploy frontend to Vercel
1. Go to **vercel.com** → "New Project"
2. Import your GitHub repo
3. Vercel auto-detects Vite — click **Deploy**
4. Go to **Settings → Domains** → add `askshule.com`
5. Vercel shows you two DNS records to add

### Step 3 — Connect your domain DNS
Log into your domain registrar and add:

| Type  | Name | Value                        |
|-------|------|------------------------------|
| A     | @    | `76.76.21.21` (Vercel IP)    |
| CNAME | www  | `cname.vercel-dns.com`       |

DNS propagates in 10–60 minutes.

### Step 4 — Deploy webhook server to Railway
The WhatsApp webhook needs a persistent Node.js server.

```bash
# Install Railway CLI
npm install -g @railway/cli
railway login
railway init        # select "Empty Project"
railway up          # deploys api/webhook.js
railway domain      # gives you a URL like smartshule-api.up.railway.app
```

Or use **Render.com** (free tier):
1. New → Web Service → connect GitHub repo
2. Build command: `npm install`
3. Start command: `node api/webhook.js`
4. Add all environment variables from .env

### Step 5 — Set environment variables on Vercel
In Vercel dashboard → Settings → Environment Variables:

```
WHATSAPP_TOKEN           = your_token_from_meta
WHATSAPP_PHONE_NUMBER_ID = your_phone_number_id
WHATSAPP_VERIFY_TOKEN    = smartshule_verify_2025
ADMIN_WHATSAPP           = 254700123456
```

---

## 📱 WhatsApp Business API Setup (Meta Cloud API — Free)

### 1. Create a Meta Developer Account
- Go to **developers.facebook.com**
- Create an App → Business → WhatsApp

### 2. Get your credentials
In your app dashboard:
- **Phone Number ID** → WhatsApp → Getting Started
- **Access Token** → generate a permanent token via System Users

### 3. Register your webhook
In Meta dashboard → WhatsApp → Configuration → Webhook:
```
Callback URL:   https://askshule.com/api/webhook
Verify Token:   smartshule_verify_2025   (must match WHATSAPP_VERIFY_TOKEN)
```
Subscribe to: **messages**

### 4. Add your phone number
- Add a real WhatsApp Business number
- Verify it via SMS code
- You're live!

---

## 📁 Project Structure

```
smartshule/
├── api/
│   └── webhook.js          ← WhatsApp webhook server (Node/Express)
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── ChatDemo.jsx     ← Bot UI (drop smartshule.jsx here)
│   │   ├── LeadsDashboard.jsx
│   │   ├── BizPlan.jsx
│   │   └── SetupPanel.jsx
│   ├── data/
│   │   ├── schoolConfig.js  ← Edit school info, fees, routes, dates here
│   │   └── botFlows.js      ← Edit bot messages and menus here
│   ├── hooks/
│   │   └── useWhatsApp.js   ← WhatsApp API hook
│   ├── pages/               ← Route-level page components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── index.html
├── .env.example             ← Copy to .env and fill in your tokens
├── vercel.json              ← Vercel deployment config
├── vite.config.js
└── package.json
```

---

## 🔧 Customise for a New School

1. Edit `src/data/schoolConfig.js` — name, fees, bus routes, term dates
2. Edit `src/data/botFlows.js` — bot messages and menu options
3. Update `.env` — WhatsApp phone number ID for that school
4. Deploy!

---

## 📞 Support

**SMARTshule** · askshule.com  
WhatsApp: +254 700 123 456
