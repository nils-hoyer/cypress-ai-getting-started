import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: 'tjnqsr',
    baseUrl: 'https://test-boutique.vercel.app',
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx,js,jsx}',
  },
  defaultCommandTimeout: 5000,
})
