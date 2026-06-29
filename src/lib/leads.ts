export interface LeadPayload {
  type: string;
  [k: string]: unknown;
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: true }> {
  try {
    await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => null);
  } finally {
    // Mock success regardless — real backend will be wired later.
    // eslint-disable-next-line no-console
    console.log("[lead]", payload);
  }
  return { ok: true };
}
