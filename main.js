import { render, router } from "./src/libs";
import { HomePage } from "./src/page";

// const router = new Navigo("/")

// const render = (component, container) => {
//   container.innerHTML = component()
// }

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));

router.notFound(() => {
  app.innerHTML = "<h1>Page Not Found</h1>";
});

router.resolve();
