import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import {
  featuredProgramSlugs,
  getProgramsBySlugs,
  impactStats,
  photos,
  servicePaths,
  site,
  values
} from "@/lib/site-data";

const servicePathImages = [
  photos.senior,
  photos.accessibility,
  photos.youth,
  photos.newcomer
];

const featuredPrograms = getProgramsBySlugs(featuredProgramSlugs);
const actionCards = [
  {
    title: "Request support",
    text:
      "Start one intake process for senior care, accessibility support, youth opportunity, or newcomer guidance.",
    href: "/apply",
    image: photos.senior,
    label: "Apply"
  },
  {
    title: "Fund practical impact",
    text:
      "Give to programs that directly improve dignity, safety, education, and belonging in community settings.",
    href: "/donate",
    image: photos.accessibility,
    label: "Donate"
  },
  {
    title: "Build with us",
    text:
      "Partner as a school, church, sponsor, artist, or community organization and help us widen access.",
    href: "/contact",
    image: photos.arts,
    label: "Partner"
  }
];

const experienceSteps = [
  {
    step: "01",
    title: "One intake, every pathway",
    text:
      "Submit a single form and we route you to the right program — whether that's home support, a scholarship, accessibility guidance, or settlement help."
  },
  {
    step: "02",
    title: "A team that follows up",
    text:
      "We review every request personally and reach out to clarify needs, confirm fit, and make sure nothing gets lost between services."
  },
  {
    step: "03",
    title: "Support that adapts",
    text:
      "Needs change over time. We check in and adjust our approach so the support keeps pace with the person, not just the original plan."
  }
];

const storyCards = [
  {
    title: "Care begins where life is already happening",
    text:
      "In homes, kitchens, waiting rooms, and living rooms, people need support that feels practical and respectful — not clinical.",
    image: photos.senior,
    feature: true
  },
  {
    title: "Training that changes daily practice",
    text:
      "Families and volunteers benefit from education that is simple, direct, and immediately usable in real caregiving situations.",
    image: photos.caregiver
  },
  {
    title: "Programs that widen belonging",
    text:
      "Scholarships, settlement guidance, and cultural programming help people feel seen, supported, and part of something larger.",
    image: photos.hero
  }
];

export default function HomePage() {
  return (
    <main className="page-wrap">
      <PageHero
        eyebrow="A coordinated care and community foundation"
        title="Compassionate support for seniors, families, and communities."
        description="Compassionate Support for Seniors Foundation provides direct support, practical education, accessibility guidance, settlement assistance, and community programs that strengthen dignity, safety, and belonging."
        actions={[
          { href: "/programs", label: "Explore Programs" },
          { href: "/apply", label: "Request Support", variant: "soft" }
        ]}
        badge={`${site.region} | Built for seniors, caregivers, youth, newcomers, and community partners`}
      >
        <div className="mosaic">
          <figure className="mosaic__tile mosaic__tile--large">
            <Image
              src={photos.hero}
              alt="Community care and support"
              width={720}
              height={560}
              priority
            />
          </figure>
          <figure className="mosaic__tile">
            <Image
              src={photos.senior}
              alt="Senior support in a home setting"
              width={520}
              height={360}
            />
          </figure>
          <figure className="mosaic__tile mosaic__tile--offset">
            <Image
              src={photos.youth}
              alt="Youth learning and mentorship"
              width={520}
              height={360}
            />
          </figure>
          <article className="floating-card">
            <p className="floating-card__label">Mission Snapshot</p>
            <strong>One foundation. Multiple public-benefit pathways.</strong>
            <span>Support, education, accessibility, settlement, and arts access in one identity.</span>
          </article>
        </div>
      </PageHero>

      <section className="metric-strip">
        {impactStats.map((item) => (
          <article className="metric-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Start here</p>
          <h2>Three ways to get involved with our work.</h2>
        </div>

        <div className="entry-grid">
          {actionCards.map((card) => (
            <article className="entry-card" key={card.title}>
              <div className="entry-card__media">
                <Image src={card.image} alt={card.title} width={640} height={420} />
              </div>
              <div className="entry-card__content">
                <p className="mini-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link className="text-link" href={card.href}>
                  Go to {card.label.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Featured programs</p>
          <h2>Built for people who need more than one kind of help.</h2>
          <p>
            We serve seniors, caregivers, youth, newcomers, people with disabilities,
            and community artists through integrated programs built around listening first.
          </p>
        </div>

        <div className="program-grid">
          {featuredPrograms.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      <section className="page-section page-section--contrast">
        <div className="section-head section-head--light">
          <p className="eyebrow">How we work</p>
          <h2>Simple intake. Thoughtful support. Honest follow-through.</h2>
          <p>
            We make it easy to find the right program, reach the right team member,
            and get real help — without unnecessary paperwork or confusion.
          </p>
        </div>

        <div className="journey-grid">
          {experienceSteps.map((item) => (
            <article className="journey-card" key={item.title}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Who we serve</p>
          <h2>Different entry points, one consistent standard of care.</h2>
        </div>

        <div className="path-grid">
          {servicePaths.map((path, i) => (
            <article className="path-card" key={path.title}>
              <div className="path-card__image">
                <Image
                  src={servicePathImages[i]}
                  alt={path.title}
                  width={400}
                  height={200}
                />
              </div>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section spotlight">
        <div className="spotlight__media">
          <div className="image-frame">
            <Image
              src={photos.caregiver}
              alt="Caregiver workshop scene"
              width={820}
              height={560}
            />
          </div>
        </div>

        <div className="spotlight__copy">
          <p className="eyebrow">Our commitment</p>
          <h2>Built for trust. Designed for dignity.</h2>
          <p>
            Every service we offer starts from the same belief: people deserve support
            that respects their circumstances, their intelligence, and their time. That
            principle shapes how we communicate, who we work with, and how we follow up.
          </p>

          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Community snapshots</p>
          <h2>Care in community.</h2>
        </div>

        <div className="story-grid">
          {storyCards.map((story) => (
            <article
              className={`story-card ${story.feature ? "story-card--feature" : ""}`}
              key={story.title}
            >
              <div className="story-card__media">
                <Image src={story.image} alt={story.title} width={760} height={520} />
              </div>
              <div className="story-card__copy">
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="cta-grid">
          <article className="cta-block cta-block--dark">
            <p className="eyebrow">Fund the work</p>
            <h2>Back care, access, and opportunity.</h2>
            <p>
              Support practical programs that can improve quality of life at home, in
              classrooms, and across community spaces.
            </p>
            <Link className="pill pill--solid" href="/donate">
              Visit the donation page
            </Link>
          </article>

          <article className="cta-block">
            <p className="eyebrow">Join the team</p>
            <h2>Volunteer with clarity and purpose.</h2>
            <p>
              From companionship visits to event support, volunteers help turn good
              intentions into reliable community action.
            </p>
            <Link className="pill pill--soft" href="/volunteer">
              View volunteer roles
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
