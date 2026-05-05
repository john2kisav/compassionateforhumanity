import Link from "next/link";

function HeroAction({ action }) {
  if (action.href.startsWith("mailto:")) {
    return (
      <a className={`pill ${action.variant === "soft" ? "pill--soft" : "pill--solid"}`} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <Link className={`pill ${action.variant === "soft" ? "pill--soft" : "pill--solid"}`} href={action.href}>
      {action.label}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
  badge,
  children
}) {
  return (
    <section className="hero-panel">
      <div className="hero-panel__glow hero-panel__glow--one" />
      <div className="hero-panel__glow hero-panel__glow--two" />

      <div className="hero-panel__grid">
        <div className="hero-panel__copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="lede">{description}</p>

          {actions.length ? (
            <div className="hero-panel__actions">
              {actions.map((action) => (
                <HeroAction key={action.href} action={action} />
              ))}
            </div>
          ) : null}

          {badge ? <p className="hero-panel__badge">{badge}</p> : null}
        </div>

        <div className="hero-panel__media">{children}</div>
      </div>
    </section>
  );
}
