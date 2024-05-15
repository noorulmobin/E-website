function toggleDropdown() {
  var dropdown = document.getElementById("list");
  dropdown.classList.toggle("show");
}

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  var dropdown = document.getElementById("list");
  var menuIcon = document.querySelector(".menu-icon");
  if (event.target !== menuIcon && !dropdown.contains(event.target)) {
    dropdown.classList.remove("show");
  }
});
