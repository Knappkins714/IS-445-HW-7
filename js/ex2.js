// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const selection = document.getElementById("house");

houses.forEach(house => {
  const option = document.createElement("option");
  option.value = house.code;
  option.innerText = house.name;
  selection.appendChild(option);
});

const houseList = document.getElementById("characters");

selection.addEventListener("change", () => {
  const houseCode = selection.value;
  const characters = getCharacters(houseCode);
  houseList.innerHTML = "";

  characters.forEach(character => {
    const houseElement = document.createElement("li");
    houseElement.innerText = character;
    houseList.appendChild(houseElement);
  });
});
