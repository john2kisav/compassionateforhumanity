import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { contactCards, contactFaqs, photos, site } from "@/lib/site-data";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main className="page-wrap">
      <PageHero
        eyebrow="Contact"
        title="Talk to the foundation about support, partnerships, or next steps."
        description="We welcome inquiries from individuals, families, partner organizations, donors, and community groups. Use the form below or reach us directly by email."
        actions={[
          { href: `mailto:${site.email}`, label: "Email the foundation" },
          { href: "#contact-form", label: "Use the contact form", variant: "soft" }
        ]}
      >
        <div className="hero-media-stack">
          <div className="image-frame">
            <Image
              src={photos.hero}
              alt="Community support team"
              width={760}
              height={540}
              priority
            />
          </div>
          <div className="info-card">
            <p className="info-card__label">Contact note</p>
            <div className="info-card__stack">
              {contactCards.map((item) => (
                <div key={item.title}>
                  <span>{item.title}</span>
                  <strong>{item.text}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Common questions</p>
          <h2>Useful answers before someone even presses send.</h2>
        </div>
        <div className="path-grid path-grid--three">
          {contactFaqs.map((item) => (
            <article className="path-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--contrast">
        <div className="callout-panel callout-panel--inside-dark">
          <div>
            <p className="eyebrow">Partnerships welcome</p>
            <h2>Churches, schools, community hubs, and sponsors can build with us.</h2>
            <p>
              Use the contact form to discuss co-hosted workshops, referral pathways,
              scholarship support, public events, or arts programming.
            </p>
          </div>
        </div>
      </section>

      <div id="contact-form">
        <InquiryForm
          formType="contact"
          title="Send a message"
          intro="Use this form for general inquiries, partnerships, referrals, speaking invitations, or operational questions."
          submitLabel="Send message"
          points={[
            "Good for partnership, referral, and sponsorship conversations",
            "Use the subject field to help us route your message",
            "We aim to respond within two business days"
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
              name: "organization",
              label: "Organization",
              placeholder: "If applicable"
            },
            {
              name: "subject",
              label: "Subject",
              type: "select",
              placeholder: "Select a subject",
              required: true,
              options: [
                "General inquiry",
                "Program partnership",
                "Referral discussion",
                "Donation partnership",
                "Volunteer coordination",
                "Media or speaking request"
              ]
            },
            {
              name: "message",
              label: "Message",
              type: "textarea",
              placeholder: "Tell us what you need or what you want to discuss.",
              full: true,
              required: true
            }
          ]}
        />
      </div>
    </main>
  );
}
