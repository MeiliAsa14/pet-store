// Define the pets array based on the provided base code
const pets = [
    // Dogs
    { "name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog01.jpg" }, // Changed img path to match previous structure (dog01.jpg -> dog1.jpg)
    { "name": "Max", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog02.jpg" }, // Changed img path to match previous structure (dog02.jpg -> dog2.jpg)
    { "name": "Bella", "type": "Dog", "age": 2, "img": "petshop-img/dogs/dog03.jpg" },
    { "name": "Charlie", "type": "Dog", "age": 4, "img": "petshop-img/dogs/dog.jpg" },

    // Cats
    { "name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat01.jpg" }, // Changed img path (cat01.jpg -> cat1.jpg)
    { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" }, // Changed img path (cat02.jpg -> cat2.jpg)
    { "name": "Luna", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat03.jpg" },
    { "name": "Milo", "type": "Cat", "age": 4, "img": "petshop-img/cats/cat.webp" },
     // Added more cats to match previous array size

    // Capybaras (kept existing as they were not in the new base code)
    { "name": "Capy", "type": "Capybara", "age": 2, "img": "petshop-img/capybaras/capybara01.jpg" },
    { "name": "Barra", "type": "Capybara", "age": 3, "img": "petshop-img/capybaras/capybara02.jpg" },

    // Birds (kept existing as they were not in the new base code)
    { "name": "Tweety", "type": "Bird", "age": 1, "img": "petshop-img/birds/bird01.jpg" },
    { "name": "Sky", "type": "Bird", "age": 2, "img": "petshop-img/birds/bird02.jpg" }
];

// Function to load pets into the DOM
function loadPets() {
    console.log("Loading pets!");
    const petList = document.getElementById("pet-list"); // Retained "pet-list" ID as per HTML

    // Clear existing content to prevent duplicates if called multiple times
    petList.innerHTML = '';

    // Iterate over the 'pets' array (lowercase 'pets' now matches array name)
    pets.forEach(pet => {
        const newPet = document.createElement("div");
        newPet.className = "pet-card"; // Retained "pet-card" class for CSS styling

        // Construct the inner HTML for each pet card
        newPet.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button class="adopt-button" data-pet-name="${pet.name}">Adopt Now</button>
        `;
        petList.append(newPet); // Appended the created pet card to the pet list
    });
    console.log("Pets loaded pawfectly!");
}


 
function loadPets() {
    console.log("Loading pets!")
    const petList = document.getElementById("pet-list");
    pets.forEach(pet => {
        const newPet = document.createElement('div');
        newPet.className = 'pet';
        newPet.innerHTML =
        `
        <img src = "${pet.img}" alt = "${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age}</p>
        <button onclick="adoptPet()">Adopt Now</button>
        `;
        petList.append(newPet)
    })
}

document.addEventListener('DOMContentLoaded', loadPets);
console.log("Pets loaded pawfectly!")