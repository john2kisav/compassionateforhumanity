import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { deliveryModel, photos, translatedObjectives, values } from "@/lib/site-data";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main className="page-wrap">
      <PageHero
        eyebrow="About the foundation"
        title="Care, education, inclusion, and public benefit — delivered together."
        description="We are a charitable foundation serving older adults, families, youth, newcomers, and communities across Ontario through direct support, practical education, and inclusive programming."
        actions={[
          { href: "/programs", label: "See the programs" },
          { href: "/contact", label: "Start a conversation", variant: "soft" }
        ]}
      >
        <div className="hero-art">
          <Image
            src={photos.hero}
            alt="Community support gathering"
            width={760}
            height={560}
            priority
          />
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Core values</p>
          <h2>The tone of the organization matters as much as the services.</h2>
        </div>
        <div className="value-grid value-grid--wide">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section spotlight">
        <div className="spotlight__copy">
          <p className="eyebrow">Translated objectives</p>
          <h2>Our charitable purposes, clearly explained.</h2>
          <ul className="stack-list">
            {translatedObjectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>

        <div className="spotlight__media">
          <div className="image-frame image-frame--tall">
            <Image
              src={photos.newcomer}
              alt="Newcomer family support conversation"
              width={760}
              height={620}
            />
          </div>
        </div>
      </section>

      <section className="page-section page-section--contrast">
        <div className="section-head section-head--light">
          <p className="eyebrow">Operating model</p>
          <h2>Three ways the foundation creates public value.</h2>
        </div>
        <div className="path-grid path-grid--three">
          {deliveryModel.map((item) => (
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
            <p className="eyebrow">Where this goes next</p>
            <h2>Partner with us, fund the work, or refer someone who needs support.</h2>
            <p>
              Get in touch to discuss funding conversations, community partnerships,
              referral arrangements, or how your organization can collaborate with
              the foundation.
            </p>
          </div>
          <Link className="pill pill--solid" href="/donate">
            Support the mission
          </Link>
        </div>
      </section>
    </main>
  );
}
