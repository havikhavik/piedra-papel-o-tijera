import { state } from "./state";

state.whoWins({ miPlay: "piedra", computerPlay: "piedra" });

import { init as initTitle } from "../components/title";
import { init as anotherTitle } from "../components/another-title";
import { init as anotherText } from "../components/another-text";
import { init as initLucasButton } from "../components/input-btn";
import { init as initLucasPlay } from "../components/plays";
import { init as initCountDown } from "../components/countdown";
import { init as initHands } from "../components/hands";
import { init as initStars } from "../components/star-results";

import { initMainPage } from "../pages/main";
import { initRouter } from "./router";

(function () {
  initTitle();
  anotherTitle();
  anotherText();
  initLucasButton();
  initLucasPlay();
  initCountDown();
  initHands();
  initStars();

  state.init();

  const pageA = initMainPage();

  const root = document.querySelector(".root");

  initRouter(root);
})();
