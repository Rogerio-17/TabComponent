let txtHome = document.getElementById("txtHome");
let txtAbout = document.getElementById("txtAbout");
let txtContact = document.getElementById("txtContact");

function ocultaTexto() {
  txtHome.hidden = false;
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

function addSelect(tab, viewTxt) {
  remover();
  if (tab.className == "") {
    tab.classList.add("select");
  }

  if (viewTxt.hidden == true) {
    viewTxt.hidden = false;
  }
}
