// ═══════════════════════════════════════════════════════════════════════════
//  ASKSHULE — SCHOOLS DATABASE
// ═══════════════════════════════════════════════════════════════════════════
//  This is the ONLY file you need to edit to onboard a new school.
//  Copy the Grove Creek School block below, paste it, change the values,
//  and the new school is instantly live at:
//
//      askshule.com/school/<slug>
//
//  No other code changes needed. The bot, leads page, and school info page
//  all read from this file automatically.
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
  // },

}

// Helper: get a school by its URL slug, or null if not found
export function getSchool(slug) {
  return SCHOOLS[slug] || null
}

// Helper: get a list of all schools (used by the Owner/Admin dashboard)
export function getAllSchools() {
  return Object.values(SCHOOLS)
}

// Helper: quick stats across all schools (used by Admin dashboard)
export function getPlatformStats() {
  const all = getAllSchools()
  return {
    totalSchools: all.length,
    activeSchools: all.filter(s => s.status === "Active").length,
    totalStudents: all.reduce((sum, s) => sum + (s.studentCount || 0), 0),
    totalLeads: all.reduce((sum, s) => sum + (s.leads?.length || 0), 0),
  }
}
