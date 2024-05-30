const { defineConfig } = require("cypress");
module.exports = defineConfig({
e2e: {
excludeSpecPattern: '**/exemples/*.cy.js',
setupNodeEvents(on, config) {
// implement node event listeners here
},
},
});