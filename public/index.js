import router from "./helpers/router.js";
import navigateTo from "./helpers/navigateTo.js";
import handleToken from "./helpers/handleToken.js";
import auth from "./helpers/auth.js";

document.addEventListener("DOMContentLoaded", async () => {
  document.body.addEventListener("click", async (e) => {
    if (e.target.getAttribute("data-link") === "/logout") {
      e.preventDefault();
      sessionStorage.clear();
      localStorage.clear();
      fetch("/api/logout");
      navigateTo("/login");
      location.reload();
    }

    if (e.target.getAttribute("data-link") === "/login") {
      e.preventDefault();
      const loginForm = document.getElementById("login-form");
      const email = loginForm.email.value;
      const pwd = loginForm.pwd.value;
      auth(email, pwd);
    }

    if (
      e.target.matches("[data-link]") &&
      e.target.getAttribute("data-link") !== "/login"
    ) {
      e.preventDefault();
      let handledToken = await handleToken(
        sessionStorage.getItem("accessToken")
      );
      if ((await handledToken) !== false) {
        navigateTo(e.target.getAttribute("data-link"));
      }
    }
  });

  if (!sessionStorage.getItem("accessToken")) {
    navigateTo("/login");
  } else {
    handleToken(sessionStorage.getItem("accessToken"));
  }
});
window.addEventListener("popstate", router);
