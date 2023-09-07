// React 18
import { mount } from "cypress/react18";
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
Cypress.Commands.add("mount", (component, options) => {
  // Wrap any parent components needed
  // ie: return mount(<MyProvider>{component}</MyProvider>, options)
  return mount(component, options);
});

Cypress.Commands.add("getReduxStore" as any, () => {
  return cy.window().its("store").should("exist");
});
