function toggleMenu() {
  const navItems = document.querySelector(".nav-items");
  if (navItems.style.display === "block") {
    navItems.style.display = "none";
  } else {
    navItems.style.display = "block";
  }
}
