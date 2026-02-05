import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://192.168.2.25:11090',
    setupNodeEvents(on, config) {
      return config
    },
  },
})

