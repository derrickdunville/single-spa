import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@main/pro",
  app: () => System.import("@main/pro"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@main/one",
  app: () => System.import("@main/one"),
  activeWhen: ["/one"],
});

registerApplication({
  name: "@main/two",
  app: () => System.import("@main/two"),
  activeWhen: ["/two"],
});

start({
  urlRerouteOnly: true,
});
