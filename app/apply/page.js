import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { applicationChecklist, applicationTracks, nextSteps, photos } from "@/lib/site-data";

export const metadata = {
  title: "Apply"
};

export default function ApplyPage() {
  return (
    <main className="page-wrap">
      <PageHero
        eyebrow="Apply for support"
        title="One application path for care, learning, accessibility, and settlement needs."
        description="Use this form to request support across any of our program areas. You can apply for yourself or on behalf of someone else — we'll follow up with the right next steps."
        actions={[
          { href: "#application-form", label: "Start an application" },
          { href: "/programs", label: "Browse program details", variant: "soft" }
        ]}
      >
        <div className="hero-media-stack">
          <div className="image-frame">
            <Image
              src={photos.newcomer}
              alt="Family support intake conversation"
              width={760}
              height={540}
              priority
            />
          </div>
          <div className="info-card">
            <p className="info-card__label">Before you apply</p>
            <ul className="stack-list stack-list--tight">
              <li>You can apply for yourself or on behalf of someone else</li>
              <li>Use the form even if you are unsure which program fits best</li>
              <li>Urgent needs can be explained in the notes field</li>
            </ul>
          </div>
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Application tracks</p>
          <h2>What kinds of support can be requested.</h2>
        </div>
        <div className="path-grid path-grid--two">
          {applicationTracks.map((track) => (
            <article className="path-card" key={track.title}>
              <h3>{track.title}</h3>
              <p>{track.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section spotlight">
        <div className="spotlight__copy">
          <p className="eyebrow">What to prepare</p>
          <h2>Simple information helps us route support faster.</h2>
          <ul className="stack-list">
            {applicationChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="spotlight__media">
          <div className="image-frame image-frame--tall">
            <Image
              src={photos.accessibility}
              alt="Accessibility support planning"
              width={760}
              height={620}
            />
          </div>
        </div>
      </section>

      <section className="page-section page-section--contrast">
        <div className="section-head section-head--light">
          <p className="eyebrow">What happens next</p>
          <h2>We aim to respond within two business days.</h2>
        </div>
        <div className="timeline-grid">
          {nextSteps.map((step, index) => (
            <article className="timeline-card" key={step}>
              <span>{`0${index + 1}`}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <div id="application-form">
        <InquiryForm
          formType="apply"
          title="Tell us what support is needed."
          intro="Use this intake form for direct support, accessibility help, learning opportunities, or settlement-related guidance."
          submitLabel="Submit application request"
          points={[
            "You can apply for yourself or on behalf of a family member",
            "Choose the support area that feels closest to your need",
            "We will review your submission and follow up within two business days"
          ]}
          fields={[
            {
              name: "fullName",
              label: "Applicant or contact name",
              placeholder: "Name of person applying",
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
              name: "phone",
              label: "Phone number",
              type: "tel",
              placeholder: "Best number to reach you"
            },
            {
              name: "supportArea",
              label: "Support area",
              type: "select",
              placeholder: "Select a support area",
              required: true,
              options: [
                "Senior home support",
                "Caregiver education",
                "Accessibility and disability support",
                "Scholarships and youth learning",
                "Newcomer support",
                "Arts and culture"
              ]
            },
            {
              name: "location",
              label: "City or community",
              placeholder: "Where support is needed"
            },
            {
              name: "message",
              label: "Describe the need",
              type: "textarea",
              placeholder: "Briefly explain the situation, urgency, and the kind of help you are looking for.",
              full: true,
              required: true
            }
          ]}
        />
      </div>
    </main>
  );
}
