// ChatTag AI assistant widget for this portfolio.
// Loads the widget bundle from the ChatTag host, then initializes it against
// this portfolio's store. Host + store are chosen at RUNTIME from the page's
// hostname — `process.env.ENVIRONMENT` is not reliably injected into the Nuxt
// client bundle, so build-time flags can't be trusted here.
const LOCAL_HOSTS = ["localhost", "127.0.0.1"]

export default () => {
  if (typeof window === "undefined") return
  if (document.getElementById("chattag-widget")) return

  const isLocal = LOCAL_HOSTS.includes(window.location.hostname)
  const widgetSrc = isLocal
    ? "http://localhost:4000/widget.js"
    : "https://chattagai.com/widget.js"
  const storeUuid = isLocal
    ? "d1acee0a-3241-4629-b81e-f208ab72f241" // local dev portfolio store
    : "346eb5cf-3ced-4d4f-a0ab-17a049c45221" // prod "Allani Ahmed" portfolio store

  const script = document.createElement("script")
  script.id = "chattag-widget"
  script.src = widgetSrc
  script.async = true
  script.onload = () => {
    if (window.ChattagAI) window.ChattagAI.init(storeUuid)
  }
  document.body.appendChild(script)
}
