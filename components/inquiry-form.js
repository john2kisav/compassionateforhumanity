import { submitLeadForm } from "@/app/actions";

function FormField({ field }) {
  if (field.type === "textarea") {
    return (
      <label className={`field ${field.full ? "field--full" : ""}`} htmlFor={field.name}>
        <span>{field.label}</span>
        <textarea
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          rows={field.rows || 6}
        />
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className={`field ${field.full ? "field--full" : ""}`} htmlFor={field.name}>
        <span>{field.label}</span>
        <select id={field.name} name={field.name} required={field.required} defaultValue="">
          <option value="" disabled>
            {field.placeholder}
          </option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label className={`field ${field.full ? "field--full" : ""}`} htmlFor={field.name}>
      <span>{field.label}</span>
      <input
        id={field.name}
        name={field.name}
        type={field.type || "text"}
        placeholder={field.placeholder}
        required={field.required}
      />
    </label>
  );
}

export function InquiryForm({
  formType,
  title,
  intro,
  submitLabel,
  fields,
  points = []
}) {
  return (
    <section className="form-panel">
      <div className="form-panel__copy">
        <p className="eyebrow">Take the next step</p>
        <h2>{title}</h2>
        <p>{intro}</p>
        {points.length ? (
          <ul className="check-list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <form action={submitLeadForm} className="inquiry-form">
        <input type="hidden" name="formType" value={formType} />
        <div className="inquiry-form__grid">
          {fields.map((field) => (
            <FormField key={field.name} field={field} />
          ))}
        </div>
        <button className="pill pill--solid inquiry-form__submit" type="submit">
          {submitLabel}
        </button>
      </form>
    </section>
  );
}
