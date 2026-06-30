// ═══════════════════════════════════════════════════════════════════════════
//  ASKSHULE — SCHOOLS DATABASE
// ═══════════════════════════════════════════════════════════════════════════
//  This is the ONLY file you need to edit to onboard a new school.
//  Copy the Grove Creek School block below, paste it, change the values,
//  and the new school is instantly live at:
//
//      askshule.com/school/<slug>
//
//  No other code changes needed. The bot, leads page, school info page,
//  newsletter, and daily brief all read from this file automatically.
// ═══════════════════════════════════════════════════════════════════════════

export const SCHOOLS = {

  // ── Grove Creek School ──────────────────────────────────────────────────
  "grove-creek": {
    slug: "grove-creek",
    name: "Grove Creek School",
    location: "Narok Town, Narok County",
    whatsappNumber: "254708908098",          // digits only, no + or spaces
    whatsappDisplay: "+254 708 908 098",
    tier: "201–400 students",
    studentCount: 320,
    termRenewal: "April 2026",
    activeTerm: "Term 1 · 2026",
    status: "Active",                         // Active | Pending | Churned

    feeStructure: [
      { grade: "PP1 – PP2",   term: "KES 28,500" },
      { grade: "Grade 1 – 3", term: "KES 32,000" },
      { grade: "Grade 4 – 6", term: "KES 36,000" },
    ],

    busRoutes: [
      { name: "Town CBD / London / Majengo",     fee: "KES 5,500" },
      { name: "Milimani / Korea / Cereals",      fee: "KES 5,500" },
    ],

    termDates: {
      open: "Mon, 5 Jan 2026",
      midterm: "Fri, 13 Feb – Mon, 23 Feb 2026",
      close: "Fri, 3 Apr 2026",
    },

    leads: [
      { name: "Wanjiku Kamau", grade: "Grade 4", phone: "+254 722 ***", status: "hot",  date: "Today" },
      { name: "Brian Omondi",  grade: "PP2",      phone: "+254 711 ***", status: "warm", date: "Today" },
      { name: "Fatuma Hassan", grade: "Grade 8",  phone: "+254 733 ***", status: "warm", date: "Yesterday" },
    ],

    // ── NEWSLETTER ─────────────────────────────────────────────────────────
    // Termly or midterm communications — bigger announcements, sent less often.
    // Newest entry first. "broadcast: true" means it was also pushed to all
    // parents via WhatsApp at the time it was posted (kept here as a record).
    newsletters: [
      {
        id: "nl-2026-t1-01",
        title: "Term 1 2026 — Welcome Back & Key Dates",
        date: "5 Jan 2026",
        body: "Welcome back to Term 1! School opens Monday 5th January. Midterm break runs 13–23 February. Please ensure all Term 1 fees are settled by 16th January. Sports day is scheduled for 6th March — details to follow.",
        broadcast: true,
        postedBy: "school",          // "school" | "admin"
      },
    ],

    // ── DAILY BRIEFS ───────────────────────────────────────────────────────
    // Short, urgent, time-sensitive updates — transport delays, weather
    // closures, emergency notices. Newest entry first.
    dailyBriefs: [
      {
        id: "db-2026-01-20",
        title: "Transport Delay — Route A",
        date: "20 Jan 2026, 6:45 AM",
        body: "Route A (Town CBD / London / Majengo) bus is running approximately 20 minutes late this morning due to road repairs near Majengo. Pickup times will adjust accordingly. We apologise for the inconvenience.",
        urgency: "warning",          // "info" | "warning" | "emergency"
        broadcast: true,
        postedBy: "school",
      },
    ],
  },

  // ── TEMPLATE — copy this block to add a new school ──────────────────────
  // "your-school-slug": {
  //   slug: "your-school-slug",
  //   name: "Your School Name",
  //   location: "Town, County",
  //   whatsappNumber: "2547XXXXXXXX",
  //   whatsappDisplay: "+254 7XX XXX XXX",
  //   tier: "1–200 students",
  //   studentCount: 150,
  //   termRenewal: "April 2026",
  //   activeTerm: "Term 1 · 2026",
  //   status: "Active",
  //   feeStructure: [
  //     { grade: "PP1 – PP2", term: "KES 25,000" },
  //   ],
  //   busRoutes: [
  //     { name: "Route A", fee: "KES 5,000" },
  //   ],
  //   termDates: {
  //     open: "Mon, 5 Jan 2026",
  //     midterm: "Fri, 13 Feb – Mon, 23 Feb 2026",
  //     close: "Fri, 3 Apr 2026",
  //   },
  //   leads: [],
  //   newsletters: [],
  //   dailyBriefs: [],
  // },

}

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getSchool(slug) {
  return SCHOOLS[slug] || null
}

export function getAllSchools() {
  return Object.values(SCHOOLS)
}

export function getPlatformStats() {
  const all = getAllSchools()
  return {
    totalSchools: all.length,
    activeSchools: all.filter(s => s.status === "Active").length,
    totalStudents: all.reduce((sum, s) => sum + (s.studentCount || 0), 0),
    totalLeads: all.reduce((sum, s) => sum + (s.leads?.length || 0), 0),
  }
}

// Sorted newest-first; safe if newsletters/dailyBriefs is undefined
export function getNewsletters(school) {
  return (school?.newsletters || [])
}

export function getDailyBriefs(school) {
  return (school?.dailyBriefs || [])
}
