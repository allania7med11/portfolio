export default {
  title: {
    en: "Cofounder & AI Engineer",
    fr: `Cofondateur & Ingénieur IA`
  },
  image: require("@/assets/images/YCombinator.png"),
  company: "Confidential (FinTech, pre-launch)",
  dates: {
    start: "May 2026",
    end: {
      en: "Present",
      fr: `Présent`
    }
  },
  description: {
    en: `Cofounder and AI lead on a pre-launch Canadian tax product that sells completed tax work, not software: the client answers in plain language, a deterministic engine computes, a licensed tax lawyer signs.
Designed the schema-as-seam architecture that keeps the model out of the math — the AI lane maps messy client chat into typed Pydantic slots, a pure-function engine turns the schema into the number, and judgment calls route to the lawyer as flags (FastAPI, PostgreSQL, SQLAlchemy).
Built the golden-set LLM eval harness gating every prompt change: 22 rows against the live Gemini model in pytest, one real call per row, no best-of-N.
Root-caused a hallucination where the model read its own echoed summary back as client-stated fact — 5/5 with the echo, 0/3 without — and fixed it with role-separated context.
Shipped the human-in-the-loop review flow: compute, resolve flags with a recorded legal basis, release under the signing lawyer's name. 312 tests green; Docker, GitHub Actions CI/CD, Sentry, Next.js.`,
    fr: `Cofondateur et responsable IA d'un produit fiscal canadien en pré-lancement qui vend le travail fiscal réalisé, pas un logiciel : le client répond en langage naturel, un moteur déterministe calcule, un avocat fiscaliste signe.
Conception de l'architecture où le schéma fait la jointure et tient le modèle hors du calcul — la voie IA transforme les messages désordonnés du client en champs Pydantic typés, un moteur en fonction pure transforme le schéma en résultat, et les points de jugement remontent à l'avocat sous forme de drapeaux (FastAPI, PostgreSQL, SQLAlchemy).
Développement de la suite d'évaluation LLM à jeu de référence qui conditionne chaque changement de prompt : 22 cas contre le modèle Gemini réel via pytest, un seul appel réel par cas, sans best-of-N.
Diagnostic d'une hallucination où le modèle relisait son propre résumé réinjecté comme un fait énoncé par le client — 5/5 avec l'écho, 0/3 sans — corrigée par séparation des rôles dans le contexte.
Livraison du flux de revue avec humain dans la boucle : calcul, résolution des drapeaux avec fondement juridique consigné, publication au nom de l'avocat signataire. 312 tests au vert ; Docker, CI/CD GitHub Actions, Sentry, Next.js.`
  }
};
