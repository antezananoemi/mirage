import { Server, Model, Factory, Response } from "miragejs";
import faker from "faker";
import pizzas from "./mocks/pizzas.json";

export function makeServer(environment = "development") {
  return new Server({
    environment,
    models: {
      user: Model,
      pizza: Model,
      company: Model
    },
    factories: {
      company: Factory.extend({
        name() {
          return faker.fake("{{company.companyName}}");
        },
        phrase() {
          return faker.fake("{{company.catchPhrase}}");
        },
        suffix() {
          return faker.fake("{{company.companySuffix}}");
        }
      })
    },
    fixtures: {
      pizzas
    },
    seeds(server) {
      server.create("user", { id: 1, name: "Peter" });
      server.create("user", { id: 2, name: "Erika" });
      server.create("user", { id: 3, name: "Rodrigo" });
      server.loadFixtures();
      server.createList("company", 10);
    },
    routes() {
      this.namespace = "api";
      this.timing = 1000;
      //   this.get("users", () => {
      //     return [
      //       { id: 1, name: "Marie" },
      //       { id: 1, name: "Monica" }
      //     ];
      //   });
      this.get("users", schema => schema.db.users);
      this.get("companies", schema => schema.db.companies);
      //   this.get("users", () => {
      //     return new Response(500, {}, "The server died");
      //   });
      //this.get("users");
      this.get("pizzas", schema => schema.db.pizzas);
    }
  });
}
