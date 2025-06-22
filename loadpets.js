const pets = [
  // Dogs
  { "name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog01.jpg" },
  { "name": "Max", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog02.jpg" },
  { "name": "Bella", "type": "Dog", "age": 2, "img": "petshop-img/dogs/dog03.jpg" },
  { "name": "Charlie", "type": "Dog", "age": 4, "img": "petshop-img/dogs/dog.jpg" },
  // Cats
  { "name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat01.jpg" },
  { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" },
  { "name": "Luna", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat03.jpg" },
  { "name": "Milo", "type": "Cat", "age": 4, "img": "petshop-img/cats/cat.webp" },
  //Capybaras
  { "name": "Capy", "type": "Capybara", "age": 2, "img": "petshop-img/capybaras/capybara01.jpg" },
  { "name": "Barra", "type": "Capybara", "age": 3, "img": "petshop-img/capybaras/capybara02.jpg" },
  //Birds
  { "name": "Tweety", "type": "Bird", "age": 1, "img": "petshop-img/birds/bird01.jpg" },
  { "name": "Sky", "type": "Bird", "age": 2, "img": "petshop-img/birds/bird02.jpg" }
];

// Function to load pets into the DOM
function loadPets() {
  console.log("Loading pets!");
  const petList = $("#pet-list");
  petList.empty();
  pets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });

  // Attach click handler using event delegation
    petList.on("click", ".adopt-btn", adoptPet);

  // Install event handler for pet type
  $("input[name='pet-type']").on("change", function () {
    const selectedType = $(this).val();
    console.log("Pet type changed:", selectedType);
    filterPets();
  });
}
// Function to filter pets based on selected type
function filterPets() {
  console.log("Selected pet type:", $("input[name='pet-type']:checked").val());
  // Get all checked pet-type inputs and map their values to an array
  const types = $('input[name="pet-type"]:checked')
    .map(function () {
      return $(this).val();
    })
    .get();

  console.log("Selected pet types:", types);

  // If no types selected, show all pets
  const filteredPets = types.length === 0
    ? pets
    : pets.filter((pet) => types.includes(pet.type));
  console.log("Filtered pets:", filteredPets);

  const petList = $("#pet-list");
  petList.empty(); // Clear the current list

  filteredPets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet-card").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });
}

$(document).ready(loadPets);
