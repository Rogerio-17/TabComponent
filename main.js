let txtHome = document.getElementById("txtHome");
let txtAbout = document.getElementById("txtAbout");
let txtContact = document.getElementById("txtContact");

function ocultaTexto() {
  txtHome.hidden = false;
  home.classList.add("select");
  txtAbout.hidden = true;
  txtContact.hidden = true;
}
ocultaTexto();

function remover() {
  let tab = document.getElementById("tab");
  let format = tab.children;

  for (let i = 0; i < format.length; i++) {
    if (format.item([i]).className != "") {
      format.item([i]).classList.remove("select");
    }
  }

  txtHome.hidden = true;
  txtAbout.hidden = true;
  txtContact.hidden = true;
}

function addSelect() {
  let home = document.getElementById("home");
  remover();
  if (home.className == "") {
    home.classList.add("select");
  }

  if (txtHome.hidden == true) {
    txtHome.hidden = false;
  }
}

function addSelect2() {
  let about = document.getElementById("about");
  remover();
  if (about.className == "") {
    about.classList.add("select");
  }

  if (txtAbout.hidden == true) {
    txtAbout.hidden = false;
  }
}

function addSelect3() {
  let contact = document.getElementById("contact");
  remover();
  if (contact.className == "") {
    contact.classList.add("select");
  }
  if (txtContact.hidden == true) {
    txtContact.hidden = false;
  }
}
