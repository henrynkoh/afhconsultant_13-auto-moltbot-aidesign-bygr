"use client";

import { useState } from "react";
import Link from "next/link";

const labs = [
  { id: 1, title: "Checklist Intake and Auto-Fill (Form 10-695)", time: "1 hr", focus: "80% AI" },
  { id: 2, title: "Postings and Documentation Setup", time: "1.5 hrs", focus: "Rights, CRU, emergency" },
  { id: 3, title: "Room and Privacy Compliance Check", time: "1.5 hrs", focus: "WAC 388-76-10685/10690" },
  { id: 4, title: "Medication and Safety Storage Setup", time: "1 hr", focus: "WAC 388-76-10455" },
  { id: 5, title: "Emergency and Evacuation Planning", time: "2 hrs", focus: "Drill schedule, 3D routes" },
  { id: 6, title: "Phone and Resident Access Simulation", time: "1 hr", focus: "24/7 access" },
  { id: 7, title: "Mock DSHS Initial Inspection Role-Play", time: "2–3 hrs", focus: "Group" },
  { id: 8, title: "Integration with Building Package", time: "1.5 hrs", focus: "WABO + 10-695" },
  { id: 9, title: "Common Citation Remediation", time: "1.5 hrs", focus: "DSHS citations" },
  { id: 10, title: "Capstone – Full Initial Inspection Prep", time: "3–4 hrs", focus: "Complete binder" },
];

const expandedContent: Record<number, { caseStudies: string[]; steps: string[]; sampleData?: string; diyTips: string[]; deliverables: string[]; debrief: string }> = {
  1: {
    caseStudies: [
      "Case Study A – New 4-bed AFH in Lacey: Owner has property address, license application number, and room list but has never seen Form 10-695. DIY: Download latest DSHS Form 10-695 (Initial Inspection Preparation Checklist) from DSHS website; use Moltbot to generate a filled version from property data (address, 4 bedrooms A–D, 2 baths). Outcome: Checklist with Sections 1–2 pre-filled; applicant completes remaining checkboxes and signs.",
      "Case Study B – Conversion from adult family home to 6-bed: Existing operator has old 10-695 from prior inspection. DIY: Moltbot prompt: ‘Compare current Form 10-695 (rev. 04/2024) to property data; list any new items or changed sections.’ Auto-fill postings (resident rights, CRU 1-800-562-6078), room list, and safety headings. Outcome: Updated checklist plus change summary for operator.",
      "Case Study C – Consultant preparing for multiple clients: DIY: Create a template JSON with standard items (postings, rooms, safety, meds, emergency, phone); for each client, run Moltbot to merge client-specific data (address, resident count, room names) and output a custom 10-695 prep sheet. Outcome: One template, many client-ready checklists in under 10 minutes each.",
    ],
    steps: [
      "Download DSHS Form 10-695 (Initial Inspection Preparation Checklist). Search 'DSHS AFH Form 10-695' or go to DSHS AFH licensing page; use latest revision (e.g. 04/2024).",
      "List property data: address, number of bedrooms (and names A–F), number of bathrooms, common areas. Have WABO building approval status if already obtained.",
      "Run auto-fill: moltbot agent --message \"Using DSHS Form 10-695 structure, generate a pre-filled checklist for AFH at [address] with [N] bedrooms (list names), [N] baths. Include sections: Postings (resident rights, complaint process, CRU hotline 1-800-562-6078, emergency disaster plan), Rooms (bedding, privacy, storage), Safety (evacuation, meds storage, fire extinguisher). Output as checklist text or form fields to complete.\" --thinking high.",
      "Merge output with actual 10-695 PDF: either paste into a copy of the form or use as a worksheet to fill the form by hand.",
      "Review each section against the official form; check off only what is already in place or will be before inspection.",
      "Applicant signs and dates where required; keep one copy for inspection and one for your file.",
    ],
    sampleData: "Form 10-695 sections: 1) Postings – Resident Rights (WAC 388-76-10500), Complaint process, CRU 1-800-562-6078, Emergency plan. 2) Rooms – Bedding, privacy locks, storage. 3) Safety – Evac plan, drills, meds storage (WAC 388-76-10455), extinguisher.",
    diyTips: [
      "Form 10-695 is the applicant’s self-check; the inspector will verify. Do not check an item until it is actually in place.",
      "CRU hotline must be posted: 1-800-562-6078. Include in postings list.",
      "If you don’t have the latest form, DSHS website or your licensor can provide it.",
    ],
    deliverables: ["Downloaded Form 10-695 (latest revision)", "Auto-filled checklist or worksheet (address, rooms, section headings)", "Completed applicant sections ready for signature", "One-line summary: what’s done vs. to-do before inspection"],
    debrief: "WAC 388-76 and DSHS require the initial inspection checklist; Form 10-695 is the standard. DIY: 80% of sections can be pre-filled with Moltbot from property data; remaining 20% is walk-through verification and signatures.",
  },
  2: {
    caseStudies: [
      "Case Study A – New 4-bed Lacey AFH: No postings yet. DIY: Use Moltbot to generate printable PDFs: (1) Resident Rights (WAC 388-76-10500 summary), (2) Complaint process with CRU 1-800-562-6078, (3) Emergency disaster plan (evac routes, meeting point, contact numbers). Print on durable paper; laminate or frame. Outcome: Three posters ready to mount in common area; CRU number visible.",
      "Case Study B – 6-bed home with existing posters: Posters are faded and one is missing the CRU number. DIY: Moltbot generates updated versions with current WAC language and CRU 1-800-562-6078; operator replaces old posters. Outcome: Full set of current postings; checklist updated.",
      "Case Study C – Consultant building a poster pack for clients: DIY: One Moltbot prompt produces a 'Poster Pack' – Resident Rights, Complaint/CRU, Emergency plan – in 8.5×11 and optional 11×17. Save as template; for each client add facility name and address. Outcome: Reusable poster pack; print and ship or email PDF for client to print.",
    ],
    steps: [
      "Resident Rights: moltbot agent --message \"Create a one-page Resident Rights poster for Washington AFH per WAC 388-76-10500: dignity, privacy, participation in care, grievance, no abuse/neglect. Use clear headings and bullet points. Include 'Complaints: CRU 1-800-562-6078.'\" --thinking high.",
      "Complaint process: moltbot agent --message \"Create a one-page Complaint Process poster for AFH: how to file a complaint, CRU hotline 1-800-562-6078, DSHS contact. Per WAC 388-76 and Form 10-695 postings.\" --thinking high.",
      "Emergency disaster plan: moltbot agent --message \"Create a one-page Emergency Disaster Plan poster for AFH: evacuation routes, meeting point outside, emergency contacts, fire extinguisher locations. Per WAC 388-76-10865.\" --thinking high.",
      "Placement: Mount in common area (e.g. living room, hallway) where residents and visitors can see. Document locations on a simple floor sketch for inspector.",
      "Durability: Use laminated sheets or frames so they don’t tear or fade; replace if damaged.",
    ],
    diyTips: [
      "CRU 1-800-562-6078 must appear on the complaint posting; inspectors check this.",
      "Resident Rights can be DSHS’s official poster if available; otherwise your generated summary must reflect WAC 388-76-10500.",
      "Emergency plan should match the written emergency plan document (Lab 5); poster is the short version.",
    ],
    deliverables: ["Resident Rights poster (PDF)", "Complaint process poster with CRU 1-800-562-6078 (PDF)", "Emergency disaster plan poster (PDF)", "Placement list or sketch (where each poster is mounted)"],
    debrief: "WAC 388-76-10500 and Form 10-695 require postings in a conspicuous place. DIY: Moltbot generates text; you print and mount. No design software needed.",
  },
  3: {
    caseStudies: [
      "Case Study A – 4-bed ranch: Each bedroom has a door and bed; two rooms share a bath. DIY: Verify each bedroom is private (WAC 388-76-10685), has lockable-from-inside door, and ≥80 sq ft (WAC 388-76-10690). Check storage for resident belongings (WAC 388-76-10765). One room had no closet – add freestanding wardrobe and document. Outcome: Room-by-room checklist; one fix (storage) before inspection.",
      "Case Study B – 6-bed with one shared room: Two residents consent to share. DIY: Verify shared room meets 100 sq ft total (WAC 388-76-10690); document consent. Check that all bedrooms have privacy for phone calls (cordless or private area). Outcome: Compliance note for shared room; privacy checklist for all rooms.",
      "Case Study C – Consultant audit: Walk through mock AFH with Form 10-695 room section and WAC 388-76-10685/10690. List each room, dimension, door lock, storage, window. Flag any room under 80 sq ft or without lock. Outcome: Room audit report; remediation list for client.",
    ],
    steps: [
      "List every bedroom: name (A–F), dimensions, door (lock from inside?), window, storage (closet or equivalent).",
      "Verify 80 sq ft minimum per bedroom (100 sq ft if shared) per WAC 388-76-10690. Measure if unsure; document on room checklist.",
      "Verify privacy: moltbot agent --message \"From this room list [paste list], generate a Room & Privacy Compliance Checklist per WAC 388-76-10685 and 10690: private bedroom, lockable from inside, adequate storage, natural light/ventilation. For each room list Pass/Fail and any action needed.\" --thinking high.",
      "Check storage: Each resident must have space for belongings (WAC 388-76-10765). Add shelves or wardrobe if missing.",
      "Document: One page per room or a table (Room, dimensions, door, storage, Pass/Fail).",
    ],
    diyTips: [
      "Lock from inside = resident can lock door for privacy; staff must still be able to enter in emergency (e.g. key or policy).",
      "80 sq ft is usable area; closets don’t count. Measure room length × width minus built-ins.",
      "If a room fails, it cannot be used as a bedroom until fixed; reduce resident count or add modification.",
    ],
    deliverables: ["Room list with dimensions and 80 sq ft check", "Privacy/storage checklist per room", "Remediation list (any room not passing)", "Photo or sketch of each room (optional but helpful for inspector)"],
    debrief: "WAC 388-76-10685 (privacy) and 10690 (size, storage) are core to initial inspection. DIY: tape measure and a walk-through; Moltbot turns your list into a compliance checklist.",
  },
  4: {
    caseStudies: [
      "Case Study A – New AFH, no meds yet: DIY: Set up locked storage (cabinet or room) per WAC 388-76-10455; label shelves for resident name or room. Write a one-page Meds Storage Policy: locked when not in use, only authorized staff, key location. Outcome: Locked cabinet, policy document, and checklist item checked.",
      "Case Study B – Existing home with meds in kitchen drawer: Non-compliant. DIY: Moltbot generates Meds Storage Policy and relocation plan. Install locked cabinet in staff-accessible area; move meds; document. Outcome: Policy + new storage; re-check Form 10-695 safety section.",
      "Case Study C – High-acuity residents with multiple meds: DIY: Policy must address secure storage, labeling, and disposal. Use Moltbot to draft policy that references WAC 388-76-10455 and includes disposal (e.g. take-back or pharmacy). Outcome: Policy plus storage layout; inspector can verify lock and labels.",
    ],
    steps: [
      "Meds Storage Policy: moltbot agent --message \"Draft a one-page Medication Storage Policy for Washington AFH per WAC 388-76-10455: storage must be locked when not in use; only authorized staff access; medications labeled; key/lock location; disposal per regulation. Use clear sections.\" --thinking high.",
      "Identify storage location: Locked cabinet or locked room; accessible to staff, not to residents or visitors. Document location (e.g. 'Hall cabinet near nurse station').",
      "Label: Each resident’s meds in labeled bin or shelf; no unlabeled containers.",
      "Key/lock: Who has the key? Where is it kept? Add one sentence to policy; ensure backup key for 24/7 coverage.",
      "Emergency/backup meds: If applicable, policy should state where emergency meds are kept and who may access.",
    ],
    diyTips: [
      "Locked means key or combination; drawer locks are acceptable if only staff have access.",
      "WAC 388-76-10455 covers storage; medication administration is a separate requirement (training, delegation).",
      "Disposal: Many jurisdictions require pharmacy take-back or similar; mention in policy.",
    ],
    deliverables: ["Medication Storage Policy (one page)", "Storage location and lock type documented", "Labeling system (e.g. resident name per shelf)", "Form 10-695 safety section updated for meds storage"],
    debrief: "WAC 388-76-10455 is a common citation if meds are not locked or labeled. DIY: one locked cabinet and one policy document; Moltbot drafts the policy.",
  },
  5: {
    caseStudies: [
      "Case Study A – 4-bed single-story ranch: DIY: Draw evac routes from each bedroom to exterior (two ways if possible). Moltbot generates Emergency Disaster Plan: fire, earthquake, power outage; evac routes, meeting point, contact numbers, drill schedule (quarterly per WAC 388-76-10865). Use floor plan from Module 3 if available; add route arrows. Outcome: Written plan + simple evac map; drill log started.",
      "Case Study B – Two-story AFH: Egress from second floor via stairs; no elevator. DIY: Plan must state how non-ambulatory residents are evacuated (e.g. evacuation chair, staff assignment). Moltbot draft includes 'Second floor: stair evacuation; Evac Chair at [location].' Add 3D or 2D route view from Module 3 Lab 5 if you have it. Outcome: Plan + upstairs evac procedure + drill schedule.",
      "Case Study C – Rural AFH, long driveway: Meeting point must be safe (e.g. at road, not in driveway). DIY: Plan states meeting point at mailbox or road; head count there. Include backup contact (neighbor, county). Outcome: Plan + meeting point map; drill practiced to that point.",
    ],
    steps: [
      "Evacuation routes: From each bedroom, trace two paths to outside (if possible). Mark on floor plan; label 'Primary' and 'Secondary' if applicable.",
      "Written plan: moltbot agent --message \"Draft an Emergency Disaster Plan for Washington AFH per WAC 388-76-10865: (1) Fire – evac routes, meeting point, head count. (2) Earthquake – drop/cover, then evac. (3) Power outage – backup lighting, fridge meds. (4) Drill schedule – quarterly, document. (5) Emergency contacts – fire, police, DSHS, backup. One page per hazard or combined document.\" --thinking high.",
      "Meeting point: Choose a safe outdoor location; document and post. Practice drill to that point.",
      "Drill schedule: Quarterly minimum; log date, time, participants, and any issues. Use simple table (Date, Type, Duration, Notes).",
      "Food/water/supplies: Plan should reference 72-hour or similar backup; list where supplies are stored.",
      "Integrate with poster: Emergency poster (Lab 2) should match this plan; routes and meeting point same.",
    ],
    diyTips: [
      "WAC 388-76-10865 requires emergency plan and drills; inspectors ask for drill log.",
      "If you have 3D from Module 3 Lab 5, add one view showing egress paths for the plan.",
      "Non-ambulatory residents: Plan must describe how they are evacuated (equipment, staff); practice in drill.",
    ],
    deliverables: ["Written Emergency Disaster Plan (fire, earthquake, power, contacts)", "Evac route map (floor plan with arrows)", "Meeting point and head-count procedure", "Drill schedule and log (template or first entry)", "Food/water/supply note or list"],
    debrief: "WAC 388-76-10865 and Form 10-695 require emergency plan and quarterly drills. DIY: one document, one map, one log; Moltbot writes the narrative.",
  },
  6: {
    caseStudies: [
      "Case Study A – New AFH, one landline in kitchen: DIY: Verify phone is accessible 24/7 (WAC 388-76-10770); residents can make private calls. Add cordless handset for bedroom hallway so residents can talk in private. Document: 'Phone: kitchen base + cordless; accessible 24/7; private calls in [location].' Outcome: Compliance; Form 10-695 item checked.",
      "Case Study B – Operator uses personal cell for business: Risky. DIY: Dedicated line or designated facility phone; policy that residents use facility phone for calls. Moltbot drafts one-paragraph Phone Access Policy. Outcome: Policy + designated phone; resident access documented.",
      "Case Study C – Residents with hearing or mobility limits: DIY: Phone in common area plus extension or cordless in hallway; amplified handset if needed. Document accessibility in policy. Outcome: Policy + equipment list; inspector can verify access.",
    ],
    steps: [
      "Identify phone(s): At least one phone accessible 24/7 to residents (WAC 388-76-10770). Landline or dedicated mobile; location(s) documented.",
      "Private calls: Residents have right to private calls. Cordless in hallway or room allows privacy; document where residents can talk privately.",
      "Policy: moltbot agent --message \"Draft a short Phone Access Policy for Washington AFH per WAC 388-76-10770: phone accessible 24/7, location(s), how residents make private calls. One paragraph.\" --thinking high.",
      "Test: Can a resident reach the phone from their room or common area? Can they make a call without being overheard if desired? Note any gap.",
      "Form 10-695: Check the item for phone access; attach policy if inspector asks.",
    ],
    diyTips: [
      "24/7 means staff cannot lock the phone away or restrict access.",
      "Private = resident can talk without staff listening; cordless in a quiet area is a simple solution.",
      "If using VoIP or cell, ensure it works during power outage or document backup.",
    ],
    deliverables: ["Phone location(s) and type documented", "Phone Access Policy (one paragraph)", "Note on private-call location", "Form 10-695 phone item checked"],
    debrief: "WAC 388-76-10770 requires telephone access 24/7. DIY: one policy, one check of location and privacy; no special equipment beyond a phone and optional cordless.",
  },
  7: {
    caseStudies: [
      "Case Study A – Solo consultant self-check: DIY: Play both roles. Walk through the home (or use photos + checklist) as 'inspector': check postings first, then each room, then safety (meds, extinguisher, emergency plan), then phone. Note any 'finding.' Switch to 'applicant' and fix or document. Outcome: Written mock inspection report (self) with 3–5 items to fix.",
      "Case Study B – Group of 3: One plays licensor, one plays applicant, one takes notes. Use real Form 10-695 and WABO checklist. Licensor asks: 'Where are resident rights posted?' 'Show me locked meds storage.' 'When was last drill?' Applicant shows; note-taker records pass/fail. Rotate roles. Outcome: 2–3 hour session; list of gaps and who will fix.",
      "Case Study C – Consultant with client: Client is applicant; consultant plays licensor. Use client’s actual home (or floor plan + photos). Run through full inspection order; consultant gives feedback. Outcome: Client knows what to expect; consultant has a real-world checklist for that property.",
    ],
    steps: [
      "Prep: Have Form 10-695, WABO checklist (if building already approved), and room list. Set timer (real inspection often 3–5 hours; you can compress to 2–3 for mock).",
      "Order of inspection (typical): (1) Postings – resident rights, CRU, emergency plan. (2) Rooms – each bedroom (privacy, size, storage), common areas. (3) Safety – meds storage, extinguisher, emergency plan document, drill log. (4) Phone – location and access. (5) Kitchen/bath – grab bars, cleanliness as applicable.",
      "Licensor role: Ask open-ended questions: 'Show me where you post the complaint number.' 'How do you ensure meds are locked?' 'When was your last evacuation drill?'",
      "Applicant role: Show documents and locations; don’t guess – if something is missing, say 'We will have that by [date].'",
      "Debrief: List every 'finding' (missing or incomplete item). Prioritize: must fix before inspection vs. nice to have. Assign owner if group.",
    ],
    diyTips: [
      "DSHS initial inspection is 3–5 hours; licensor may take notes and send follow-up. Mock prepares you for pace and questions.",
      "Common findings: missing CRU on poster, meds not locked, no drill log, room under 80 sq ft.",
      "If solo, use a voice recorder or checklist and 'inspect' as you walk; then fix list.",
    ],
    deliverables: ["Mock inspection checklist (completed)", "List of findings (pass/fail per item)", "Remediation list with owner and deadline", "Optional: 1-page 'Inspection readiness summary' for client"],
    debrief: "Mock inspection reduces surprises. DIY: 2–3 hours with a partner or solo with checklist; WAC 388-76 and Form 10-695 are the script.",
  },
  8: {
    caseStudies: [
      "Case Study A – Building permit just approved: DIY: Combine WABO building approval (from Module 3) with completed Form 10-695 and postings/room/safety docs. One binder: Tab 1 – WABO checklist + floor plan. Tab 2 – Form 10-695. Tab 3 – Postings (copies). Tab 4 – Emergency plan. Tab 5 – Meds policy, phone policy. Outcome: Single 'Initial Inspection' binder for licensor.",
      "Case Study B – Consultant packaging for client: Client has WABO approval and scattered docs. DIY: Moltbot generates a table of contents and section dividers. You assemble: building package (WABO + plans), then 10-695 and all policies/posters. PDF cover page with address and 'Initial Inspection Package – [Date].' Outcome: Professional binder or PDF portfolio; client submits or presents at inspection.",
      "Case Study C – Re-inspection after failed first: DIY: Add cover letter: 'Re-inspection package – [address]. Below are corrections for findings from inspection on [date].' Attach only revised items (e.g. new poster with CRU, meds policy, drill log). Keep original package for reference. Outcome: Short re-inspection packet; faster review for licensor.",
    ],
    steps: [
      "Gather: WABO building checklist + approved floor plan (from Module 3 Labs 7–8). Form 10-695 completed and signed. Copies of postings (resident rights, CRU, emergency). Emergency disaster plan. Meds storage policy. Phone policy. Drill log (if any). Room checklist.",
      "Order: (1) Cover – facility name, address, date, 'Initial Inspection Package.' (2) WABO + floor plan. (3) Form 10-695. (4) Postings. (5) Emergency plan. (6) Policies (meds, phone). (7) Drill log / room audit if helpful.",
      "Table of contents: moltbot agent --message \"Create a one-page Table of Contents for an AFH Initial Inspection package: sections 1–7 as [list]. For DSHS licensor.\" --thinking high. Place after cover.",
      "Bind: PDF portfolio (merge all PDFs) or physical binder with tabs. Name file: AFH_Initial_Inspection_[Address]_[Date].pdf.",
      "Verify: Every item the licensor might ask for (postings, 10-695, building approval, emergency plan, meds policy) is in the package.",
    ],
    diyTips: [
      "Some licensors want one PDF; others accept a binder. Ask your licensor or use both: binder for inspection, PDF for email.",
      "WABO + 10-695 together show building and operational readiness; keep them in one package.",
      "If building approval is pending, note 'WABO approval pending' and attach proof of submission; some licensors will schedule once building is in progress.",
    ],
    deliverables: ["Combined package (PDF or binder) with cover and TOC", "WABO + floor plan section", "Form 10-695 section", "Postings and policies section", "Emergency plan and drill log section"],
    debrief: "Integration saves time at inspection: one package, one handoff. DIY: 1.5 hours to assemble after Labs 1–7 are done; Moltbot does the TOC.",
  },
  9: {
    caseStudies: [
      "Case Study A – Citation: 'Resident rights not posted in conspicuous place.' DIY: Relocate poster to main hallway or living room; take photo. Write one-sentence response: 'Resident rights poster now posted in main hallway, [date].' Resubmit photo or bring to re-inspection. Outcome: Citation remediated; documentation for file.",
      "Case Study B – Citation: 'No evidence of evacuation drill in past 12 months.' DIY: Conduct a drill; complete drill log (date, participants, duration). Submit log copy. Response: 'Evacuation drill conducted on [date]; log attached.' Outcome: Drill log; citation closed.",
      "Case Study C – Citation: 'Medication storage not locked.' DIY: Install lock; photo of locked cabinet; policy updated. Response: 'Locked medication cabinet installed at [location]; policy updated [date].' Outcome: Photo + policy; re-inspection or written closure.",
    ],
    steps: [
      "List citation(s): From DSHS letter or inspection report, list each finding (e.g. 'Postings not visible,' 'Meds not locked').",
      "Map to WAC: Each citation usually references or implies a WAC (e.g. 388-76-10500 for rights, 388-76-10455 for meds). Note the WAC for your response.",
      "Remediate: Fix the issue (relocate poster, add lock, conduct drill). Document with photo or dated form where helpful.",
      "Respond: moltbot agent --message \"Draft a short remediation response for DSHS: Citation [quote]. Action taken: [what you did]. WAC [number]. Attached: [list]. One paragraph per citation.\" --thinking high.",
      "Submit: Send response and attachments (photo, policy, drill log) per licensor instructions (email, portal, or mail). Keep copy for your file.",
    ],
    diyTips: [
      "Respond by the deadline on the citation letter; extensions are sometimes possible if you ask.",
      "One paragraph per citation is enough; be specific (date, location, what was done).",
      "Common citations: postings, meds storage, drill log, room size, phone access. Lab 1–6 prevent most of these.",
    ],
    deliverables: ["List of citations with WAC reference", "Remediation for each (what was done)", "Written response (one paragraph per citation)", "Attachments (photos, updated policy, drill log)"],
    debrief: "DSHS citations are fixable; quick remediation and clear response speed closure. DIY: use Moltbot to draft the response; you do the fix and attach proof.",
  },
  10: {
    caseStudies: [
      "Case Study A – Full DIY from scratch for one property: Complete Labs 1–9 in sequence for a single mock or real AFH: Form 10-695 auto-fill → postings → room check → meds policy → emergency plan → phone policy → mock inspection → integrate with building package → remediation template. Time: 3–4 hours. Outcome: Complete Initial Inspection binder; ready for submission or mock licensor visit.",
      "Case Study B – Consultant building a repeatable package: Use one property as template. Create master Form 10-695 prep, master poster set, master emergency plan template, master policy set. For next client, swap address and resident count; run Moltbot to customize. Outcome: Template bundle + 3–4 hour capstone per new client.",
      "Case Study C – Client has inspection in 2 weeks: Prioritize: (1) Postings and 10-695 (Day 1). (2) Room and meds (Day 2). (3) Emergency plan and drill (Day 3). (4) Phone and integration (Day 4). (5) Mock inspection and fix list (Day 5). Outcome: Inspection-ready in 5 days; client runs mock with consultant on Day 5.",
    ],
    steps: [
      "Lab 1: Form 10-695 intake and auto-fill (1 hr).",
      "Lab 2: Postings – generate and place (1.5 hrs).",
      "Lab 3: Room and privacy audit (1.5 hrs).",
      "Lab 4: Meds storage policy and setup (1 hr).",
      "Lab 5: Emergency plan and evac map, drill schedule (2 hrs).",
      "Lab 6: Phone policy and access check (1 hr).",
      "Lab 7: Mock DSHS inspection – self or group (2–3 hrs).",
      "Lab 8: Integrate with building package (WABO + 10-695 + policies) (1.5 hrs).",
      "Lab 9: Review common citations; draft remediation templates (1.5 hrs).",
      "Final: Assemble complete binder; table of contents; one-page 'Inspection readiness' summary. Walk through as licensor one more time; fix any gap.",
    ],
    diyTips: [
      "Capstone in 3–4 hours is doable if you have building package and property data ready; otherwise add 1–2 hours for data gathering.",
      "Keep a 'Master Binder' PDF after first capstone; duplicate and replace address/client name for next time.",
      "Inspection readiness summary: one page listing 'Postings ✓, Rooms ✓, Meds ✓, Emergency ✓, Phone ✓, Building ✓' and any 'To do before inspection.'",
    ],
    deliverables: ["Complete Initial Inspection binder (PDF or physical)", "Table of contents", "Inspection readiness summary (one page)", "Optional: remediation response templates for common citations"],
    debrief: "Capstone ties Module 4 to Module 3 (building) and prepares for real DSHS inspection. DIY: one full run-through; then use as template for every future client.",
  },
};

export default function Module4LabsPage() {
  const [openLab, setOpenLab] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <p className="text-sm text-slate-500">
        <Link href="/labs" className="hover:underline">Labs</Link>
        {" → "}
        Module 4
      </p>
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          Module 4 Labs: Initial Inspection Preparation (Expanded)
        </h1>
        <p className="mt-2 text-slate-600">
          Detailed, DIY-friendly labs for DSHS Form 10-695, postings, rooms, meds, emergency, phone, mock inspection, and full binder. Use Moltbot for ~80% automation where noted.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Lab list
        </h2>
        <div className="space-y-2">
          {labs.map((lab) => {
            const expanded = expandedContent[lab.id];
            const isOpen = openLab === lab.id;
            return (
              <div
                key={lab.id}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenLab(isOpen ? null : lab.id)}
                  className="w-full text-left px-4 py-3 flex flex-wrap items-center gap-2 hover:bg-slate-50"
                >
                  <span className="font-mono text-slate-500">Lab {lab.id}</span>
                  <span className="font-medium text-afh-primary">{lab.title}</span>
                  <span className="text-slate-500 text-sm">{lab.time}</span>
                  <span className="text-slate-400 text-sm">· {lab.focus}</span>
                  <span className="ml-auto text-slate-400">{isOpen ? "▼" : "▶"}</span>
                </button>
                {isOpen && expanded && (
                  <div className="px-4 pb-4 pt-0 border-t border-slate-100 space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold text-slate-800 mt-3">Case studies (DIY)</h3>
                      <ul className="list-disc pl-6 mt-1 space-y-2 text-slate-700">
                        {expanded.caseStudies.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Steps</h3>
                      <ol className="list-decimal pl-6 mt-1 space-y-1 text-slate-700">
                        {expanded.steps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                    </div>
                    {expanded.sampleData && (
                      <div>
                        <h3 className="font-semibold text-slate-800">Sample / reference</h3>
                        <p className="mt-1 text-slate-700 whitespace-pre-wrap">{expanded.sampleData}</p>
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-slate-800">DIY tips</h3>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-slate-700">
                        {expanded.diyTips.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Deliverables</h3>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-slate-700">
                        {expanded.deliverables.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Debrief</h3>
                      <p className="mt-1 text-slate-700">{expanded.debrief}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-afh-light/30 p-4">
        <h2 className="text-lg font-semibold text-afh-primary mb-2">
          How to use these labs (DIY)
        </h2>
        <ul className="text-slate-700 text-sm list-disc pl-6 space-y-1">
          <li>Work in order: Lab 1 → 10. Each lab builds on the previous; Lab 8 integrates with Module 3 building package.</li>
          <li>Use one mock AFH (e.g. 4-bed, Lacey) for Labs 1–9; do Lab 10 as full capstone for the same or a second property.</li>
          <li>DSHS Form 10-695: Download latest from DSHS AFH licensing page (e.g. rev. 04/2024). CRU hotline: 1-800-562-6078.</li>
          <li>WAC 388-76 (AFH), WAC 388-76-10500 (rights), 388-76-10455 (meds), 388-76-10865 (emergency), 388-76-10770 (phone).</li>
          <li>Moltbot: Use <code className="bg-white px-1 rounded">moltbot agent --message \"...\" --thinking high</code> for policies and checklists.</li>
        </ul>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/labs" className="hover:underline">← Labs</Link>
        {" · "}
        <Link href="/curriculum/module-4" className="hover:underline">Module 4</Link>
        {" · "}
        <Link href="/labs/module-3" className="hover:underline">Module 3 Labs</Link>
      </p>
    </div>
  );
}
