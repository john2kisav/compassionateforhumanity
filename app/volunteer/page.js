import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { photos, volunteerFaqs, volunteerRoles, volunteerSteps } from "@/lib/site-data";

export const metadata = {
  title: "Volunteer"
};

export default function VolunteerPage() {
  return (
    <main className="page-wrap">
      <PageHero
        eyebrow="Volunteer"
        title="Serve with structure, warmth, and clear expectations."
        description="We welcome volunteers who are reliable, community-minded, and ready to contribute in a structured, supervised environment. Browse available roles and apply below."
        actions={[
          { href: "#volunteer-form", label: "Apply to volunteer" },
          { href: "/programs", label: "Review program areas", variant: "soft" }
        ]}
      >
        <div className="hero-media-stack">
          <div className="image-frame">
            <Image
              src={photos.volunteer}
              alt="Volunteer community service"
              width={760}
              height={540}
              priority
            />
          </div>
          <div className="info-card">
            <p className="info-card__label">Volunteer environment</p>
            <ul className="stack-list stack-list--tight">
              <li>Community-facing roles with support and supervision</li>
              <li>Flexible opportunities across care, education, and events</li>
              <li>Orientation before service begins</li>
            </ul>
          </div>
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Volunteer roles</p>
          <h2>Different people can contribute in different ways.</h2>
        </div>
        <div className="path-grid path-grid--two">
          {volunteerRoles.map((role) => (
            <article className="path-card" key={role.title}>
              <h3>{role.title}</h3>
              <p>{role.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--contrast">
        <div className="section-head section-head--light">
          <p className="eyebrow">Joining process</p>
          <h2>Volunteering should feel organized from the first interaction.</h2>
        </div>
        <div className="timeline-grid">
          {volunteerSteps.map((step, index) => (
            <article className="timeline-card" key={step}>
              <span>{`0${index + 1}`}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-head">
          <p className="eyebrow">Volunteer FAQ</p>
          <h2>Questions people usually ask before joining.</h2>
        </div>
        <div className="path-grid path-grid--three">
          {volunteerFaqs.map((item) => (
            <article className="path-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <div id="volunteer-form">
        <InquiryForm
          formType="volunteer"
          title="Tell us how you want to serve."
          intro="Share your availability, strengths, and preferred area of service. We will use this to route you to the right volunteer conversation."
          submitLabel="Send volunteer interest"
          points={[
            "Choose the role that feels closest to your experience or energy",
            "Use the message field to explain any schedule constraints",
            "We will reach out to discuss fit and next steps"
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
              name: "phone",
              label: "Phone number",
              type: "tel",
              placeholder: "Best number to reach you"
            },
            {
              name: "interestArea",
              label: "Preferred role",
              type: "select",
              placeholder: "Select a role",
              required: true,
              options: [
                "Companionship volunteer",
                "Program support volunteer",
                "Settlement and resource guide",
                "Creative and event volunteer"
              ]
            },
            {
              name: "availability",
              label: "Availability",
              placeholder: "Weekdays, evenings, weekends, etc.",
              full: true
            },
            {
              name: "message",
              label: "Why you want to help",
              type: "textarea",
              placeholder: "Briefly tell us what kind of contribution you want to make.",
              full: true
            }
          ]}
        />
      </div>
    </main>
  );
}
