export default {
  title: {
    en: "Full Stack Engineer",
    fr: `Ingénieur Full Stack`
  },
  image: require("@/assets/images/Wateer.png"),
  company: "Wateer",
  dates: {
    start: "Oct 2025",
    end: {
      en: "Present",
      fr: `Présent`
    }
  },
  description: {
    en: `Production-scale SaaS digital-receipt platform.
Architected an event-driven system (Django, FastAPI, Kafka) with a unified integration layer that normalizes multiple POS systems into a single flow, cutting the effort to onboard each new source. Delivers a digital receipt to every end customer within seconds — even at peak traffic, regardless of the source system; secured with OAuth and API keys.
Deployed on Kubernetes with HPA auto-scaling; load-tested to a sustained 150+ req/s over tens of thousands of documents with zero errors, pods auto-scaling on demand with comfortable headroom over production load.
Built custom Grafana dashboards tracking messages/sec per pod, P95 latency, error rates, scaling delays, and pod resource usage in real time.
Built a payment SaaS platform that gives merchants one real-time view of their payment operations — automating reconciliation and issuing instant digital payment receipts. Drove delivery end-to-end: designed the architecture and data model, broke a dense SRS into clearly-scoped tickets, and reviewed the team's implementation to hold quality (Fastify, TypeScript, Next.js).
Containerized with Docker on Huawei Cloud; CI/CD with GitHub Actions, Cloudflare CDN, and Sentry monitoring.`,
    fr: `Plateforme SaaS de reçus numériques à l'échelle production.
Architecture d'un système événementiel (Django, FastAPI, Kafka) doté d'une couche d'intégration unifiée qui normalise plusieurs systèmes POS en un flux unique, réduisant l'effort d'intégration de chaque nouvelle source. Délivre un reçu numérique à chaque client final en quelques secondes — même en période de forte affluence et quelle que soit la source ; sécurisé par OAuth et clés API.
Déploiement sur Kubernetes avec auto-scaling HPA ; testé en charge à un débit soutenu de plus de 150 req/s sur des dizaines de milliers de documents sans erreur, pods s'auto-adaptant à la demande avec une marge confortable au-delà de la charge de production.
Tableaux de bord Grafana sur mesure suivant en temps réel les messages/s par pod, la latence P95, les taux d'erreur, les délais de scaling et l'usage des ressources des pods.
Développement d'une plateforme SaaS de paiement offrant aux marchands une vue unifiée et en temps réel de leurs opérations de paiement — automatisant la réconciliation et générant des reçus de paiement numériques instantanés. Pilotage de la livraison de bout en bout : conception de l'architecture et du modèle de données, découpage d'un SRS dense en tickets clairement cadrés, et revue de l'implémentation de l'équipe pour garantir la qualité (Fastify, TypeScript, Next.js).
Conteneurisation avec Docker sur Huawei Cloud ; CI/CD avec GitHub Actions, Cloudflare CDN et monitoring Sentry.`
  }
};
