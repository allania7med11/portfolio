export default {
  title: {
    en: "Full Stack Engineer — Agentic AI",
    fr: `Ingénieur Full Stack — IA agentique`
  },
  image: require("@/assets/images/Wateer.png"),
  company: "Wateer",
  dates: {
    start: {
      en: "Oct 2025",
      fr: `Oct. 2025`
    },
    end: {
      en: "Present",
      fr: `Présent`
    }
  },
  description: {
    en: `Production-scale SaaS digital-receipt platform for merchants: every sale, from any POS, becomes a digital receipt the customer opens within seconds.
Architected the event-driven core (Django, FastAPI, Kafka) with a unified integration layer that normalizes every source — POS APIs such as Foodics, ingest services, and printed receipts — into one receipt flow, so onboarding a new source is configuration and an adapter, not a new pipeline; secured with OAuth and API keys.
Built the printed-receipt path as one of those sources: an ingest service that accepts a receipt from any printer, stores the PDF and publishes a per-POS-ordered event that triggers the AI extraction.
Integrated the extraction agent into the platform: a LangGraph pipeline that extracts the PDF text, OCRs image pages, has an LLM parse the result into a validated invoice schema, and on validation failure re-prompts with the specific errors up to a bounded retry count (Python, LangGraph, Pydantic, GPT via OpenRouter). Designed the handoff so the customer sees the scanned PDF instantly, the itemised receipt once the agent finishes, and keeps the PDF if it fails.
Deployed on Kubernetes with HPA auto-scaling; load-tested to a sustained 150+ req/s over tens of thousands of documents with zero errors, with Grafana dashboards tracking per-pod throughput, P95 latency, error rates and scaling delays.
Led delivery of a merchant payment SaaS end-to-end — architecture, data model, SRS breakdown into tickets, code review (Fastify, TypeScript, Next.js).
Docker on Huawei Cloud; CI/CD with GitHub Actions, Cloudflare CDN, and Sentry.`,
    fr: `Plateforme SaaS de reçus numériques à l'échelle production pour les commerçants : chaque vente, quel que soit le POS, devient un reçu numérique que le client ouvre en quelques secondes.
Architecture du cœur événementiel (Django, FastAPI, Kafka) avec une couche d'intégration unifiée qui normalise chaque source — API de POS comme Foodics, services d'ingestion et reçus imprimés — en un flux unique, si bien qu'intégrer une nouvelle source relève de la configuration et d'un adaptateur, pas d'un nouveau pipeline ; sécurisé par OAuth et clés API.
Développement du chemin des reçus imprimés comme l'une de ces sources : un service d'ingestion qui accepte un reçu de n'importe quelle imprimante, stocke le PDF et publie un événement ordonné par POS qui déclenche l'extraction par IA.
Intégration de l'agent d'extraction à la plateforme : un pipeline LangGraph qui extrait le texte du PDF, applique l'OCR aux pages image, fait analyser le résultat par un LLM dans un schéma de facture validé et, en cas d'échec de validation, relance avec les erreurs précises jusqu'à un nombre borné de tentatives (Python, LangGraph, Pydantic, GPT via OpenRouter). Conception de la remise au client : le PDF scanné s'affiche immédiatement, le reçu détaillé dès que l'agent a terminé, et le PDF reste en cas d'échec.
Déploiement sur Kubernetes avec auto-scaling HPA ; testé en charge à un débit soutenu de plus de 150 req/s sur des dizaines de milliers de documents sans erreur, avec des tableaux de bord Grafana suivant le débit par pod, la latence P95, les taux d'erreur et les délais de scaling.
Pilotage de bout en bout d'une plateforme SaaS de paiement pour marchands — architecture, modèle de données, découpage du SRS en tickets, revue de code (Fastify, TypeScript, Next.js).
Docker sur Huawei Cloud ; CI/CD avec GitHub Actions, Cloudflare CDN et Sentry.`
  }
};
