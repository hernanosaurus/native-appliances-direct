function byName(name) {
  return document.getElementsByName(name);
}

function submitForm(event) {
  const radios = byName("contactMethod");

  let value;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      value = radios[i].value;
      break;
    }
  }

  // Don't prevent the default action if a radio button was clicked
  if (event.target.type !== "radio") {
    event.preventDefault();
  }
}
