import Link from "next/link";
import { formMessages } from "@/lib/site-data";

const destinations = {
  donate: "/donate",
  volunteer: "/volunteer",
  apply: "/apply",
  contact: "/contact"
};

function readParam(value) {
  if (Array.isArray(value)) {
    return value[0] || "";
  }

  return value || "";
}

export const metadata = {
  title: "Thank You"
};

export default async function ThankYouPage({ searchParams }) {
  const params = await searchParams;
  const form = readParam(params.form) || "contact";
  const name = readParam(params.name);
  const topic = readParam(params.topic);
  const message = formMessages[form] || formMessages.contact;
  const destination = destinations[form] || "/contact";

  return (
    <main className="page-wrap">
      <section className="thanks-panel">
        <p className="eyebrow">Submission received</p>
        <h1>
          {message.title}
          {name ? ` Thank you, ${name}.` : ""}
        </h1>
        <p className="lede">{message.body}</p>
        {topic ? <p className="thanks-panel__topic">Topic selected: {topic}</p> : null}
        <div className="hero-panel__actions">
          <Link className="pill pill--solid" href={destination}>
            Go back
          </Link>
          <Link className="pill pill--soft" href="/">
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}
