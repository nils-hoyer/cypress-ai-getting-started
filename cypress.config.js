import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: 'tjnqsr',
    baseUrl: 'https://test-boutique.vercel.app',
  },
  allowCypressEnv: false,
})
