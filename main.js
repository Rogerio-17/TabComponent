function remover() {
  let tab = document.getElementById("tab");
  let format = tab.children;

  for (let i = 0; i < format.length; i++) {
    if (format.item([i]).className != "") {
      format.item([i]).classList.remove("select");
    }
  }
}

function addSelect() {
  let home = document.getElementById("home");
  remover();
  if (home.className == "") {
    home.classList.add("select");
  }
}

function addSelect2() {
  let about = document.getElementById("about");
  remover();
  if (about.className == "") {
    about.classList.add("select");
  }
}

function addSelect3() {
  let contact = document.getElementById("contact");
  remover();
  if (contact.className == "") {
    contact.classList.add("select");
  }
}
