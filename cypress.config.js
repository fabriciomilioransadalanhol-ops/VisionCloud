import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "jkyxke",
  e2e: {
    baseUrl: 'http://192.168.2.25:11090/#',
    setupNodeEvents(on, config) {
      return config
    },
    video: true,
    reporter: 'mochawesome',
     reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" },
      charts: true,
      reportTitle: 'Relatório De Testes VisionCloud',
      cdn: true,
  },
})

