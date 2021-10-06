import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

// registerApplication({
//   name: "@main/root",
//   app: () => System.import("@main/root"),
//   activeWhen: ["/"],
// });
//
// registerApplication({
//   name: "@main/one",
//   app: () => System.import("@main/one"),
//   activeWhen: ["/one"],
// });
//
// registerApplication({
//   name: "@main/two",
//   app: () => System.import("@main/two"),
//   activeWhen: ["/two"],
// });
//
// start({
//   urlRerouteOnly: true,
// });

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();
