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
    en: `Cofounder and AI lead on a pre-launch Canadian tax product that sells completed tax work rather than software — a wrong answer is a legal liability, not a bad user experience. Own the architecture, AI stack, and correctness bar.
Designed the system so the model never computes or concludes: it only turns client conversation into typed, validated fields, a deterministic engine produces the number, and anything requiring professional judgment escalates to a licensed tax lawyer (FastAPI, Pydantic, PostgreSQL, Gemini).
Built the golden-set evaluation harness that gates every prompt change, so a fix for one phrasing can't silently break five others — each case scored on the single live call a real client gets.
Shipped the human review flow — compute the result, resolve every judgment call with its legal basis recorded, and release under the signing lawyer's name (Docker, GitHub Actions, Sentry, Next.js).`,
    fr: `Cofondateur et responsable IA d'un produit fiscal canadien en pré-lancement qui vend le travail fiscal réalisé plutôt qu'un logiciel — une réponse erronée est un risque juridique, pas un défaut d'expérience utilisateur. Responsable de l'architecture, de la stack IA et du niveau d'exigence sur la justesse.
Conception d'un système où le modèle ne calcule ni ne conclut jamais : il transforme uniquement la conversation client en champs typés et validés, un moteur déterministe produit le résultat, et tout point relevant du jugement professionnel remonte à un avocat fiscaliste (FastAPI, Pydantic, PostgreSQL, Gemini).
Développement du harnais d'évaluation à jeu de référence qui conditionne chaque changement de prompt : un correctif sur une formulation ne peut plus en casser cinq autres à notre insu, chaque cas étant évalué sur l'appel unique que reçoit un vrai client.
Livraison du flux de revue humaine — calcul du résultat, résolution de chaque point de jugement avec son fondement juridique consigné, et publication au nom de l'avocat signataire (Docker, GitHub Actions, Sentry, Next.js).`
  }
};
