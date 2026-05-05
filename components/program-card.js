import Image from "next/image";
import Link from "next/link";

export function ProgramCard({ program }) {
  return (
    <article className="program-card">
      <div className="program-card__image">
        <Image
          src={program.image}
          alt={program.name}
          width={640}
          height={420}
          sizes="(max-width: 900px) 100vw, 33vw"
        />
      </div>

      <div className="program-card__content">
        <p className="program-card__category">{program.category}</p>
        <h3>{program.name}</h3>
        <p>{program.summary}</p>
        <ul className="tag-list">
          {program.highlights.slice(0, 2).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/programs/${program.slug}`}>
          View program details
        </Link>
      </div>
    </article>
  );
}
