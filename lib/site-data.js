export const site = {
  name: "Compassionate Support for Seniors Foundation",
  shortName: "CSS Foundation",
  email: "info@compassionateforhumanity.org",
  url: "https://www.compassionateforhumanity.org/",
  region: "Ontario, Canada",
  mission:
    "We help seniors, caregivers, youth, newcomers, and underserved households access dignified care, practical education, and stronger community support."
};

export const photos = {
  hero: "/images/hero-community-care.jpg",
  senior: "/images/senior-home-support.jpg",
  caregiver: "/images/caregiver-training-workshop.jpg",
  accessibility: "/images/accessibility-home-safety.jpg",
  youth: "/images/youth-leadership-education.jpg",
  newcomer: "/images/newcomer-family-support.jpg",
  volunteer: "/images/volunteer-community-service.jpg",
  arts: "/images/arts-cultural-program.jpg"
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/apply", label: "Apply" },
  { href: "/contact", label: "Contact" }
];

export const impactStats = [
  { value: "6", label: "integrated program areas" },
  { value: "1", label: "coordinated intake pathway" },
  { value: "Home + Community", label: "support settings" },
  { value: "Ontario-rooted", label: "service outlook" }
];

export const programs = [
  {
    slug: "senior-support",
    name: "Senior Home Support",
    category: "Older Adult Care",
    summary:
      "Practical, non-medical support that helps older adults remain safe, connected, and confident at home.",
    teaser:
      "Companionship, meal support, housekeeping assistance, shopping help, wellness check-ins, and accompanied appointments.",
    image: photos.senior,
    audience: "Older adults, family caregivers, and seniors living alone",
    format: "Home visits, phone follow-up, and coordinated referrals",
    availability: "Designed for frail seniors or older adults with limited mobility",
    highlights: [
      "Daily living support built around dignity and routine",
      "Companionship designed to reduce loneliness and isolation",
      "Navigation support that links families to the right external services"
    ],
    services: [
      "Non-medical personal support planning",
      "Meal preparation and light household help",
      "Shopping coordination and errand assistance",
      "Accompaniment to medical or essential appointments",
      "Wellness check-ins and family updates when appropriate"
    ],
    outcomes: [
      "Safer home living and reduced crisis escalation",
      "Lower isolation for older adults living alone",
      "Clearer support pathways for families managing care"
    ],
    process: [
      "Intake conversation to understand mobility, safety, and household needs",
      "A tailored support plan that combines direct help and referrals",
      "Ongoing follow-up to adapt services as needs change"
    ]
  },
  {
    slug: "caregiver-education",
    name: "Caregiver Education and Family Training",
    category: "Public Education",
    summary:
      "Workshops and practical tools that help families, volunteers, and informal caregivers deliver safer and more confident care.",
    teaser:
      "Training in in-home support, palliative care assistance, elder abuse prevention, communication, and care coordination.",
    image: photos.caregiver,
    audience: "Family caregivers, church groups, volunteers, and the public",
    format: "Workshops, downloadable tools, small-group learning, and talks",
    availability: "Suitable for beginner and intermediate caregivers",
    highlights: [
      "Public-facing education with clear, usable language",
      "Skill-building that supports both caregiver confidence and recipient safety",
      "Flexible delivery for community centres, churches, and partner groups"
    ],
    services: [
      "Caregiving fundamentals and safe support practices",
      "Palliative care assistance orientation",
      "Elder abuse awareness and prevention training",
      "Care communication and boundary-setting sessions",
      "Resource guides for home support and referral pathways"
    ],
    outcomes: [
      "Better-prepared families and volunteer teams",
      "More consistent in-home support quality",
      "Stronger awareness of risk factors and escalation pathways"
    ],
    process: [
      "Assess the learning needs of the audience",
      "Deliver workshop content in accessible, practical formats",
      "Share take-home tools, referral links, and follow-up resources"
    ]
  },
  {
    slug: "accessibility-support",
    name: "Accessibility and Disability Support",
    category: "Safety and Inclusion",
    summary:
      "Home safety reviews and practical support that reduce avoidable injuries and make daily living easier for seniors and people with disabilities.",
    teaser:
      "Risk assessments, accessibility planning, small home adjustments, assistive device guidance, and disability-informed navigation support.",
    image: photos.accessibility,
    audience: "People living with disabilities, older adults, and their households",
    format: "Home assessment, planning support, and referral coordination",
    availability: "Best for households managing mobility or fall-risk concerns",
    highlights: [
      "Simple environmental fixes with immediate quality-of-life value",
      "Support that treats accessibility as dignity, not an afterthought",
      "Integrated planning across disability, aging, and caregiver realities"
    ],
    services: [
      "In-home fall-risk and safety reviews",
      "Guidance on assistive devices and accessibility aids",
      "Planning support for minor home modifications",
      "Navigation help for disability and community resources",
      "Follow-up to track urgent needs and next actions"
    ],
    outcomes: [
      "Reduced environmental hazards in the home",
      "Improved mobility confidence for service users",
      "Clearer decision-making for families under pressure"
    ],
    process: [
      "Review the home environment and identify practical barriers",
      "Recommend staged improvements based on urgency and budget",
      "Connect the household to relevant services, vendors, or support networks"
    ]
  },
  {
    slug: "youth-learning",
    name: "Youth Leadership and Education Support",
    category: "Scholarships and Growth",
    summary:
      "Leadership development, scholarships, bursaries, awards, and public learning opportunities that widen access to education.",
    teaser:
      "Programs for students, young leaders, and adult learners seeking confidence, recognition, and community-minded growth.",
    image: photos.youth,
    audience: "Youth, students, families, and lifelong learners",
    format: "Workshops, awards, learning events, and application-based support",
    availability: "Open to young leaders and learners at different stages",
    highlights: [
      "Academic encouragement paired with leadership development",
      "Recognition pathways that celebrate effort and growth",
      "Education framed as a community-strengthening tool"
    ],
    services: [
      "Leadership and civic participation workshops",
      "Scholarship, bursary, and award pathways",
      "Academic encouragement and excellence recognition",
      "Community development conferences and seminars",
      "Learning initiatives that can grow into schools or structured programs"
    ],
    outcomes: [
      "More visible pathways into education and leadership",
      "Better encouragement for high-potential learners",
      "Programs that connect academic success to service"
    ],
    process: [
      "Publish opportunities and explain eligibility clearly",
      "Review applications or nominations through transparent criteria",
      "Pair recognition with follow-on learning or leadership opportunities"
    ]
  },
  {
    slug: "newcomer-support",
    name: "Newcomer and Family Settlement Support",
    category: "Settlement and Inclusion",
    summary:
      "Support for refugees, immigrants, and families who need help navigating language, employment, culture, and essential services.",
    teaser:
      "Orientation support, translation help, employment readiness, job-search guidance, and referrals to community systems.",
    image: photos.newcomer,
    audience: "Refugees, immigrants, and households in transition",
    format: "Workshops, case guidance, practical tools, and partner referrals",
    availability: "Best for early-stage settlement and transition support",
    highlights: [
      "Plain-language support during periods of high uncertainty",
      "Service navigation that reduces fragmentation and confusion",
      "A family-centered approach to settlement and belonging"
    ],
    services: [
      "Language and communication support pathways",
      "Employment readiness and job-search programming",
      "Orientation resources on Canadian life and local systems",
      "Translation and information support",
      "Referrals to legal, social, educational, or health partners when needed"
    ],
    outcomes: [
      "Faster stabilization during settlement",
      "Better access to essential support systems",
      "Greater confidence navigating work, school, and community life"
    ],
    process: [
      "Understand the family or individual transition priorities",
      "Identify urgent service gaps and practical next steps",
      "Support follow-through with tools, referrals, and check-ins"
    ]
  },
  {
    slug: "arts-culture",
    name: "Arts, Culture, and Community Expression",
    category: "Public Arts",
    summary:
      "Accessible arts programming that builds public appreciation, showcases artists, and creates shared spaces for connection.",
    teaser:
      "Public exhibitions, choral performances, performance art events, and cultural showcases in community-facing venues.",
    image: photos.arts,
    audience: "Local artists, residents, schools, churches, and community audiences",
    format: "Public events, performances, exhibitions, and artist forums",
    availability: "Ideal for community venues and inclusive public programming",
    highlights: [
      "Art presented as a civic good, not a luxury",
      "Free or low-barrier events for audiences often left out of regular access",
      "Platforms that help qualified artists share work publicly"
    ],
    services: [
      "Public art exhibitions and presentations",
      "Classical and community choral performances",
      "Performance art events and artist participation forums",
      "Programs in churches, schools, and community centres",
      "Audience-building initiatives for underserved communities"
    ],
    outcomes: [
      "Wider access to high-quality artistic experiences",
      "More visibility for community and emerging artists",
      "Stronger social connection through shared cultural life"
    ],
    process: [
      "Curate mission-aligned artistic programming",
      "Work with partners to select venues and widen audience access",
      "Use events as a bridge between culture, wellbeing, and community identity"
    ]
  }
];

export const featuredProgramSlugs = [
  "senior-support",
  "accessibility-support",
  "youth-learning"
];

export const servicePaths = [
  {
    title: "For older adults and caregivers",
    text:
      "Get direct home support, companionship, care planning, appointment accompaniment, and caregiver education."
  },
  {
    title: "For people living with disabilities",
    text:
      "Access home safety reviews, accessibility guidance, disability-informed support, and referral coordination."
  },
  {
    title: "For youth and students",
    text:
      "Explore scholarships, leadership opportunities, workshops, and academic encouragement pathways."
  },
  {
    title: "For newcomers and community creatives",
    text:
      "Find settlement guidance, orientation resources, public learning, and arts participation opportunities."
  }
];

export const values = [
  {
    title: "Dignity in practice",
    text:
      "We design services that respect the person in front of us, not just the category they belong to."
  },
  {
    title: "Practical action",
    text:
      "We favor useful support, clear follow-up, and workable next steps over vague goodwill."
  },
  {
    title: "Integrated thinking",
    text:
      "Care, education, inclusion, and culture are connected. Our programs respond to the full reality of community life."
  },
  {
    title: "Public benefit",
    text:
      "Whether through direct services, workshops, or community events, every program is built for public good."
  }
];

export const translatedObjectives = [
  "Relief of conditions attributable to being aged through direct home support, companionship, safety interventions, and resource navigation.",
  "Promotion of health through social wellbeing, reduced isolation, safer home environments, and practical disability support.",
  "Advancement of education through caregiver training, youth leadership development, scholarships, bursaries, and community workshops.",
  "Support for refugees and immigrants through settlement guidance, language and employment support, and culturally responsive information.",
  "Advancement of the public's appreciation of the arts through accessible performances, exhibitions, and artist platforms."
];

export const deliveryModel = [
  {
    title: "Direct support",
    text:
      "Home-based assistance, companionship, resource coordination, accessibility planning, and individualized intake."
  },
  {
    title: "Education and prevention",
    text:
      "Workshops, seminars, learning resources, leadership development, and public awareness programming."
  },
  {
    title: "Community activation",
    text:
      "Scholarships, arts events, partner-based programs, and inclusive gatherings that build belonging."
  }
];

export const givingOptions = [
  {
    title: "Monthly Care Circle",
    amount: "$35 to $99",
    text:
      "Helps sustain recurring companionship visits, care coordination follow-up, and practical program materials."
  },
  {
    title: "Family Support Gift",
    amount: "$100 to $249",
    text:
      "Supports a mix of home safety planning, workshop delivery, and referral support for families under pressure."
  },
  {
    title: "Access and Learning Gift",
    amount: "$250 to $999",
    text:
      "Expands scholarship pathways, accessibility tools, and community education sessions."
  },
  {
    title: "Partner Contribution",
    amount: "$1,000+",
    text:
      "Suitable for churches, businesses, and philanthropic partners backing a full initiative or event stream."
  }
];

export const fundAllocation = [
  {
    title: "Senior wellbeing and home support",
    text: "Companionship, practical assistance, intake coordination, and supportive follow-up."
  },
  {
    title: "Accessibility and disability inclusion",
    text: "Safety reviews, assistive planning, and environmental barrier reduction."
  },
  {
    title: "Scholarships and public education",
    text: "Youth workshops, bursaries, caregiver education, and community learning materials."
  },
  {
    title: "Settlement and arts programming",
    text: "Newcomer support, public events, artist platforms, and low-barrier cultural access."
  }
];

export const donorPromises = [
  "Your gift is aligned to real community needs, not generic campaign language.",
  "We communicate clearly about what programs are being strengthened.",
  "We are building a culture of stewardship, dignity, and measurable usefulness."
];

export const volunteerRoles = [
  {
    title: "Companionship Volunteer",
    text:
      "Support social wellbeing through check-ins, friendly visits, and accompaniment that reduces loneliness."
  },
  {
    title: "Program Support Volunteer",
    text:
      "Help during workshops, community events, scholarship logistics, and public-facing activities."
  },
  {
    title: "Settlement and Resource Guide",
    text:
      "Assist newcomers and families by helping them understand forms, referrals, and next steps."
  },
  {
    title: "Creative and Event Volunteer",
    text:
      "Support exhibitions, performances, documentation, hospitality, and audience engagement."
  }
];

export const volunteerSteps = [
  "Submit an interest form with your strengths, availability, and preferred area of service.",
  "Complete a conversation with the team so we can match you to the right role.",
  "Attend orientation or training before beginning community-facing work.",
  "Serve consistently with clear boundaries, supervision, and support."
];

export const volunteerFaqs = [
  {
    question: "Do I need prior caregiving experience?",
    answer:
      "Not always. Some roles are entry-level and training-supported, while others require more confidence or relevant experience."
  },
  {
    question: "Can students volunteer?",
    answer:
      "Yes. Student volunteers can contribute to events, youth programming, communications, and selected support roles."
  },
  {
    question: "Are there remote opportunities?",
    answer:
      "Some administrative, research, outreach, and communications roles can be structured with remote support in mind."
  }
];

export const applicationTracks = [
  {
    title: "Request home support",
    text:
      "For older adults or families who need direct help, companionship, or guidance with care coordination."
  },
  {
    title: "Apply for education opportunities",
    text:
      "For learners, students, or young leaders interested in scholarships, bursaries, awards, or workshops."
  },
  {
    title: "Request accessibility support",
    text:
      "For households navigating mobility, safety, or disability-related challenges within the home."
  },
  {
    title: "Ask for newcomer guidance",
    text:
      "For individuals or families needing help with settlement, orientation, employment preparation, or referrals."
  }
];

export const applicationChecklist = [
  "Basic contact details for the applicant or family representative",
  "A short description of the current need or challenge",
  "Location and availability information for follow-up",
  "Any urgent safety, mobility, or access issues we should know about"
];

export const nextSteps = [
  "We review your intake and identify the right program or support pathway.",
  "A team member follows up to clarify needs, timing, and fit.",
  "If another partner is better placed to help, we point you there quickly.",
  "When appropriate, we begin service planning, orientation, or a referral package."
];

export const contactCards = [
  {
    title: "Email",
    text: site.email
  },
  {
    title: "Coverage",
    text: "Ontario-rooted with a community-first, partnership-friendly service model."
  },
  {
    title: "Response rhythm",
    text: "Most inquiries can be acknowledged within two business days."
  }
];

export const contactFaqs = [
  {
    question: "Can organizations partner with the foundation?",
    answer:
      "Yes. Churches, schools, community centres, social agencies, and sponsors can collaborate on programs or events."
  },
  {
    question: "Do you offer every service directly?",
    answer:
      "Not always. Some needs are best served by partner agencies, so resource navigation is part of the model."
  },
  {
    question: "Is this only for seniors?",
    answer:
      "Senior support is a major pillar, but the foundation also serves caregivers, youth, newcomers, artists, and people with disabilities."
  }
];

export const formMessages = {
  donate: {
    title: "Your donation interest has been received.",
    body:
      "We will follow up with the next steps for giving and confirm which initiative or funding stream you want to support."
  },
  volunteer: {
    title: "Your volunteer interest has been received.",
    body:
      "We will review your availability, skills, and preferred role, then reach out with the next step in the onboarding process."
  },
  apply: {
    title: "Your application request has been received.",
    body:
      "We will review the information you shared and follow up on fit, urgency, and the most appropriate program pathway."
  },
  contact: {
    title: "Your message has been received.",
    body:
      "We will respond with the most relevant contact, answer, or next action as soon as possible."
  }
};

export function getProgramBySlug(slug) {
  return programs.find((program) => program.slug === slug);
}

export function getProgramsBySlugs(slugs) {
  return slugs.map((slug) => getProgramBySlug(slug)).filter(Boolean);
}
