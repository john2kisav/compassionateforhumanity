import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { donorPromises, fundAllocation, givingOptions, photos } from "@/lib/site-data";

export const metadata = {
  title: "Donate"
};

export default function DonatePage() {
  return (
    <main className="page-wrap">
      <PageHero
        eyebrow="Donate"
        title="Support practical care, inclusive education, and community dignity."
        description="Your contribution directly funds programs that deliver dignified care, practical education, and greater belonging to people across Ontario. Every dollar goes toward real community need."
        actions={[
          { href: "#donation-form", label: "Start a donation inquiry" },
          { href: "/contact", label: "Discuss partnership giving", variant: "soft" }
        ]}
      >
        <div className="hero-media-stack">
          <div className="image-frame">
            <Image
              src={photos.senior}
              alt="Senior support impact in a home environment"
              width={760}
              height={540}
              priority
            />
          </div>
          <div className="info-card">
            <p className="info-card__label">Giving focus</p>
            <ul className="stack-list stack-list--tight">
              <li>Senior home support and social wellbeing</li>
              <li>Accessibility, scholarships, and public education</li>
              <li>Settlement support and community arts access</li>
            </ul>
          </div>
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Ways to give</p>
          <h2>Built for individual donors, families, and mission-aligned partners.</h2>
        </div>
        <div className="path-grid path-grid--four">
          {givingOptions.map((option) => (
            <article className="path-card" key={option.title}>
              <p className="mini-label">{option.amount}</p>
              <h3>{option.title}</h3>
              <p>{option.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section spotlight">
        <div className="spotlight__copy">
          <p className="eyebrow">Where support goes</p>
          <h2>Donors should understand the shape of the work, not just the slogan.</h2>
          <div className="path-grid path-grid--two">
            {fundAllocation.map((item) => (
              <article className="path-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="spotlight__media">
          <div className="image-frame image-frame--tall">
            <Image
              src={photos.accessibility}
              alt="Accessibility and home safety support"
              width={760}
              height={620}
            />
          </div>
        </div>
      </section>

      <section className="page-section page-section--contrast">
        <div className="section-head section-head--light">
          <p className="eyebrow">Donor promise</p>
          <h2>Clarity, usefulness, and stewardship.</h2>
        </div>
        <div className="timeline-grid">
          {donorPromises.map((promise, index) => (
            <article className="timeline-card" key={promise}>
              <span>{`0${index + 1}`}</span>
              <p>{promise}</p>
            </article>
          ))}
        </div>
      </section>

      <div id="donation-form">
        <InquiryForm
          formType="donate"
          title="Tell us how you want to support the mission."
          intro="Use this form to express donation interest, discuss a giving amount, or explore a partnership contribution."
          submitLabel="Send donation inquiry"
          points={[
            "Suitable for individual giving or larger partner conversations",
            "Use the notes field to describe a preferred program area or giving level",
            "We will follow up to confirm your details and next steps"
          ]}
          fields={[
            {
              name: "fullName",
              label: "Full name",
              placeholder: "Your name",
              required: true
            },
            {
              name: "email",
              label: "Email address",
              type: "email",
              placeholder: "name@example.com",
              required: true
            },
            {
              name: "givingFocus",
              label: "Giving focus",
              type: "select",
              placeholder: "Select a focus area",
              required: true,
              options: [
                "General mission support",
                "Senior wellbeing",
                "Accessibility and disability support",
                "Scholarships and education",
                "Settlement support",
                "Arts and culture"
              ]
            },
            {
              name: "amountRange",
              label: "Estimated giving range",
              type: "select",
              placeholder: "Select a range",
              required: true,
              options: ["Up to $100", "$100 to $499", "$500 to $999", "$1,000+"]
            },
            {
              name: "message",
              label: "Notes",
              type: "textarea",
              placeholder: "Tell us if you prefer one-time, monthly, or partnership giving.",
              full: true
            }
          ]}
        />
      </div>
    </main>
  );
}
