// Switch Function
const switchTheme = () => {
  const rootElem = document.documentElement;

  let dataTheme = rootElem.getAttribute("data-theme"),
    newTheme = dataTheme === "light" ? "dark" : "light";

  rootElem.setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);
};

document.querySelector(".theme").addEventListener("click", switchTheme);
