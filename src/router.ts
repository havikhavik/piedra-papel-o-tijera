import { initMainPage } from "../pages/main";
import { initInstructions } from "../pages/instructions";
import { initPlay } from "../pages/play";
import { initResult } from "../pages/result";

const routes = [
  {
    path: /\/welcome/,
    handler: initMainPage,
  },

  {
    path: /\/instructions/,
    handler: initInstructions,
  },
  {
    path: /\/play/,
    handler: initPlay,
  },
  {
    path: /\/result/,
    handler: initResult,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.handler({ goTo: goTo });

        while (container.firstChild) {
          container.firstChild.remove();
        }

        container.appendChild(el);
      }
    }
  }

  if (location.host.includes("github.io") || "/") {
    goTo("/piedra-papel-o-tijera/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
