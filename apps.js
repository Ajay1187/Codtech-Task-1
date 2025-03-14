const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.body.setAttribute("data-theme", newTheme);
  const themeFile = newTheme === "dark" ? "themes/dark.css" : "themes/light.css";
  document.getElementById("theme-style").setAttribute("href", themeFile);
});

// Add initial theme
document.body.setAttribute("data-theme", "light");
const themeLink = document.createElement("link");
themeLink.id = "theme-style";
themeLink.rel = "stylesheet";
themeLink.href = "themes/light.css";
document.head.appendChild(themeLink);
