function showDropdown() {
  document.getElementById("dropdown-content").classList.add("show");
}

function hideDropdown() {
  document.getElementById("dropdown-content").classList.remove("show");
}

function like(x) {
  if (x.classList.contains("fa-regular")) {
    x.classList.remove("fa-regular");
    x.classList.add("fa-solid");
  } else {
    x.classList.remove("fa-solid");
    x.classList.add("fa-regular");
  }
}
