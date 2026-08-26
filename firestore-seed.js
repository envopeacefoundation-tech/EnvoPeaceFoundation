// ═══════════════════════════════════════════════════════════════
// Envo Peace & Development Foundation — Firestore Seed Script
//
// Usage:
//   1. Install Firebase Admin SDK:  npm install firebase-admin
//   2. Set your service account:    export GOOGLE_APPLICATION_CREDENTIALS="./service-account.json"
//   3. Run:                         node firestore-seed.js
// ═══════════════════════════════════════════════════════════════

const admin = require("firebase-admin");

admin.initializeApp({
  projectId: "envopeacefoundation-9a61a",
});

const db = admin.firestore();

async function seed() {
  console.log("Seeding Firestore...\n");

  // ── Impact Stats ──────────────────────────────────────
  const stats = [
    { key: "families_served", label: "Families Served", value: "5,000+", description: "Across South-East Nigeria", sort_order: 1 },
    { key: "communities_reached", label: "Communities Reached", value: "25+", description: "Rural & peri-urban areas", sort_order: 2 },
    { key: "children_sponsored", label: "Children Sponsored", value: "500+", description: "Back into school", sort_order: 3 },
    { key: "consultations", label: "Free Consultations", value: "2,000+", description: "Medical outreaches", sort_order: 4 },
    { key: "youth_trained", label: "Youth Trained", value: "50+", description: "Skills & leadership programs", sort_order: 5 },
    { key: "funds_to_programs", label: "Funds to Programs", value: "100%", description: "Every donation counts", sort_order: 6 },
  ];

  for (const stat of stats) {
    await db.collection("impact_stats").doc(stat.key).set({
      ...stat,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
      updated_at: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log(`  ✓ impact_stats/${stat.key}`);
  }

  // ── Programs ──────────────────────────────────────────
  const programs = [
    {
      slug: "outreach",
      title: "Outreach Programs",
      tagline: "Meeting communities where they are.",
      description: "Boots-on-the-ground initiatives that bring relief, dignity, and hope directly to underserved communities.",
      icon: "HeartHandshake",
      highlights: [
        { title: "Relief Distribution", body: "Food packs, hygiene kits, and clothing for vulnerable families." },
        { title: "Community Listening", body: "House-to-house visits to understand needs before we act." },
        { title: "Crisis Response", body: "Rapid mobilization to communities affected by displacement or disaster." },
      ],
      outcomes: [
        "Over 5,000 families served across South-East Nigeria",
        "Active in 25+ rural and peri-urban communities",
        "Quarterly relief campaigns powered by local volunteers",
      ],
      sort_order: 1,
    },
    {
      slug: "education",
      title: "Educational Support",
      tagline: "Keeping every child in the classroom.",
      description: "Scholarships, learning materials, and mentorship that keep children and young adults in school.",
      icon: "GraduationCap",
      highlights: [
        { title: "Scholarships", body: "Sponsorships for primary, secondary, and tertiary students." },
        { title: "Learning Materials", body: "Books, uniforms, and stationery delivered each new term." },
        { title: "Mentorship Circles", body: "Volunteer mentors guiding students through academic and life decisions." },
      ],
      outcomes: [
        "Hundreds of children sponsored back into school",
        "Partnerships with local schools and PTAs",
        "After-school study clubs in rural communities",
      ],
      sort_order: 2,
    },
    {
      slug: "healthcare",
      title: "Healthcare Assistance",
      tagline: "Healthcare as a right, not a privilege.",
      description: "Free medical outreaches, essential medications, and access to care for vulnerable families.",
      icon: "Stethoscope",
      highlights: [
        { title: "Free Medical Outreaches", body: "Consultations, screenings, and medication for under-served areas." },
        { title: "Maternal & Child Care", body: "Pre-natal support, vaccinations, and infant nutrition guidance." },
        { title: "Health Education", body: "Workshops on hygiene, nutrition, and preventive care." },
      ],
      outcomes: [
        "Thousands of free consultations delivered",
        "Essential medications dispensed at no cost",
        "Referral support for critical cases",
      ],
      sort_order: 3,
    },
    {
      slug: "youth",
      title: "Youth Empowerment",
      tagline: "Building the next generation of African leaders.",
      description: "Skills training, leadership development, and entrepreneurship pathways for African youth.",
      icon: "Users",
      highlights: [
        { title: "Vocational Training", body: "Tailoring, ICT, catering, and trade skills with certification." },
        { title: "Leadership Bootcamps", body: "Workshops on character, communication, and civic responsibility." },
        { title: "Startup Grants", body: "Seed funding and mentorship for youth-led micro-businesses." },
      ],
      outcomes: [
        "Young entrepreneurs launched with seed grants",
        "Annual leadership summit for emerging leaders",
        "Job-ready graduates from our skills programs",
      ],
      sort_order: 4,
    },
    {
      slug: "community",
      title: "Community Development",
      tagline: "Lifting whole communities, not just individuals.",
      description: "Sustainable infrastructure, peace-building, and grassroots projects that lift entire communities.",
      icon: "Sprout",
      highlights: [
        { title: "Clean Water Projects", body: "Boreholes and water points for communities without safe water." },
        { title: "Peace Dialogues", body: "Mediation and reconciliation between communities in conflict." },
        { title: "Grassroots Organizing", body: "Training local committees to lead their own development." },
      ],
      outcomes: [
        "Water access restored in remote villages",
        "Peace committees established across multiple communities",
        "Long-term partnerships with local government",
      ],
      sort_order: 5,
    },
  ];

  for (const program of programs) {
    await db.collection("programs").doc(program.slug).set({
      ...program,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
      updated_at: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log(`  ✓ programs/${program.slug}`);
  }

  console.log("\nSeed complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
