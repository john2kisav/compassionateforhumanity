import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { photos, programs } from "@/lib/site-data";

export const metadata = {
  title: "Programs"
};

const deliveryPoints = [
  {
    title: "Responsive intake",
    text:
      "People enter through one clear pathway, then get matched to the right combination of services."
  },
  {
    title: "Integrated referrals",
    text:
      "Where another provider is better positioned to help, the foundation acts as a connector instead of a dead end."
  },
  {
    title: "Practical follow-up",
    text:
      "Programs are framed around useful next steps, not one-time inspiration or broad mission language."
  }
];

export default function ProgramsPage() {
  return (
    <main className="page-wrap">
      <PageHero
        eyebrow="Programs"
        title="Six programs, one coordinated foundation."
        description="Browse our program areas below, or submit an intake form and we'll help you find the right fit. Every program is built around a real community need."
        actions={[
          { href: "/apply", label: "Apply for support" },
          { href: "/contact", label: "Discuss a partnership", variant: "soft" }
        ]}
      >
        <div className="hero-media-stack">
          <div className="image-frame">
            <Image
              src={photos.accessibility}
              alt="Accessibility support and home safety"
              width={720}
              height={520}
            />
          </div>
          <div className="info-card">
            <p className="info-card__label">Program mix</p>
            <ul className="stack-list stack-list--tight">
              <li>Direct support for seniors and households</li>
              <li>Education for caregivers, youth, and communities</li>
              <li>Settlement, accessibility, and arts access programming</li>
            </ul>
          </div>
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">All programs</p>
          <h2>Each program can stand on its own and also connect to the others.</h2>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      <section className="page-section page-section--contrast">
        <div className="section-head section-head--light">
          <p className="eyebrow">How delivery works</p>
          <h2>Built to reduce confusion, not add to it.</h2>
        </div>
        <div className="path-grid path-grid--three">
          {deliveryPoints.map((item) => (
            <article className="path-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="callout-panel">
          <div>
            <p className="eyebrow">Need help choosing?</p>
            <h2>Start with the intake form and we can route you to the right program.</h2>
          </div>
          <Link className="pill pill--solid" href="/apply">
            Go to application
          </Link>
        </div>
      </section>
    </main>
  );
}
