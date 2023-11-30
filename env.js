const Production = process.env.ENVIRONMENT != "dev"
const urls = {
  backendUrl: process.env.BACKEND_URL || ""
}
const Test = true
const TestInfo = { user: "user1" }
export { Production, urls, Test, TestInfo }
