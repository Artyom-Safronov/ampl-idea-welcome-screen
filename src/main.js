import "./style.css";

console.log("Init main.js");

const actions = {
  update_plugin: function (n) {
    window.suggestionQuery &&
      window.suggestionQuery({
        request: "ADD_REPOSITORY",
        onSuccess: function (e) {},
        onFailure: function (e, o) {},
      });
  },
  configure_project: function (n) {
    window.suggestionQuery &&
      window.suggestionQuery({
        request: "CONFIGURE_PROJECT",
        onSuccess: function (e) {},
        onFailure: function (e, o) {},
      });
  },
  create_admin_ui: function (n) {
    window.suggestionQuery &&
      window.suggestionQuery({
        request: "CREATE_ADMIN_UI",
        onSuccess: function (e) {},
        onFailure: function (e, o) {},
      });
  },
};

const actionLinks = document.querySelectorAll("[data-action]");

actionLinks.forEach((actionLink) => {
  actionLink.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.dataset.action && actions[event.target.dataset.action]) {
      actions[event.target.dataset.action]();
    }
  });
});

const licenseLinck = document.querySelector("[data-license]");

licenseLinck.addEventListener("click", (event) => {
  event.preventDefault();

  window.jbCefQuery({
    request: "ping-the-IDE",
    onSuccess: function (response) {},
    onFailure: function (errCode, errMsg) {},
  });
});

const licenseUpdateLink = document.querySelector("[data-update]");

licenseUpdateLink.addEventListener("click", (event) => {
  event.preventDefault();

  window.jbCefQuery({
    request: "ping-the-IDE",
    onSuccess: function (response) {},
    onFailure: function (errCode, errMsg) {},
  });
});

const hideCheckBox = document.querySelector("[data-hide]");

hideCheckBox.addEventListener("click", (event) => {
  // event.preventDefault();

  const hide = event.target.dataset.hide === "false";

  hideCheckBox.setAttribute("data-hide", `${hide}`);
});
