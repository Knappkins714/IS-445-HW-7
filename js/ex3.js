// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const input = document.getElementById("country");
const suggestions = document.getElementById("suggestions");

input.addEventListener("keyup", () => {
  suggestions.innerHTML = "";
  let inputText = input.value;
  for (let i of countryList) {
    if (i.startsWith(inputText)) {
      let child = document.createElement("p");
      child.innerHTML = i;
      child.className = "suggestion";
      suggestions.appendChild(child);
    }
  }
});
