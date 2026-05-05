"use server";

import { redirect } from "next/navigation";

export async function submitLeadForm(formData) {
  const formType = String(formData.get("formType") || "contact");
  const nameSource =
    formData.get("fullName") ||
    formData.get("name") ||
    formData.get("contactName") ||
    "";
  const topicSource =
    formData.get("interestArea") ||
    formData.get("supportArea") ||
    formData.get("givingFocus") ||
    formData.get("subject") ||
    formData.get("program") ||
    "";

  const name = String(nameSource).trim().split(" ")[0];
  const topic = String(topicSource).trim();
  const params = new URLSearchParams({ form: formType });

  if (name) {
    params.set("name", name);
  }

  if (topic) {
    params.set("topic", topic);
  }

  redirect(`/thank-you?${params.toString()}`);
}
