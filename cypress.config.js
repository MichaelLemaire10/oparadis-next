const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'a932qx',
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    specPattern: 'cypress/**/*.cy.{js,jsx}',
    video: false,
  }
})