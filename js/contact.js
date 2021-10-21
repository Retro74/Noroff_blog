// Bør gjøre dette for at intellisense skal fungere for elementene
const form_contact = document.getElementById("form_contact");
const div_formResult = document.getElementById("div_formResult");

const form_Values = {}; //JS Object
let formErrors = []; //JS Array

//Event for innsending av skjema
form_contact.addEventListener("submit", function (event) {
  event.preventDefault()
  formErrors = []; //Reset prev. errors
  const formData = new FormData(form_contact);
  for (const [name, value] of formData) {
    if (!value) {
      formErrors.push(
        document.getElementById(name).getAttribute("data-displayErrorText")
        )
      document.getElementById("lbl_for_" + name).className = "alert alert-danger";
    } else {
      form_Values[name] = value;
      document.getElementById("lbl_for_" + name).className = "";
    }
  }

  if (formErrors.length) {
    div_formResult.innerHTML = "";
    for (eachError of formErrors) {
      div_formResult.innerHTML += "* Feil: " + eachError + "<br>"
      div_formResult.className = "alert alert-danger"
    }
  } else {
    div_formResult.innerHTML = `
            <h4>Suksess</h4>
            <p>Melding sendt</p>
            `
    div_formResult.className = "alert alert-success"
  }
})
