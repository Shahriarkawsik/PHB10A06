// categoryBtn
const loadCategoryBtn = ()=>{
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
  .then(res => res.json())
  .then(data => displayCategoryBtn(data.categories))
}
loadCategoryBtn();
// //displayCategoryBtn 
const displayCategoryBtn = (categories) => {
  const categoryBtnSection = document.getElementById("categoryBtn");
  for (const item of categories) {
    // const categoryBtnID = item.id;
    // console.log(categoryBtnID);
    const categoryBtn = document.createElement("div");
    categoryBtnSection.appendChild(categoryBtn);
    categoryBtn.classList.add('categoryBtn','inactiveBtn');
    categoryBtn.innerHTML = `      
      <img src="${item.category_icon}" alt="" />
      <h1 class="font-bold text-24 leading-7">${item.category}</h1>
    `;
  }
};

// Fetch All Pets
const loadAllPets = () =>{
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
  .then(res => res.json())
  // .then(data => displayAllPetsTest(data.pets))
  .then(data => displayAllPets(data.pets))
  
}
loadAllPets()
// display all pets
const displayAllPetsTest = (pets) =>{
  const petsContainer = document.getElementById("petsContainer");
  for (const pet of pets) {
    
    const petCard = document.createElement("div");
    petsContainer.appendChild(petCard);
    petCard.classList.add('p-5', 'border', 'border-color1.1', 'rounded-xl', 'space-y-3');
    petCard.innerHTML = `
    <img
      class="rounded-lg mb-6 w-full"
      src="${pet.image}"
      alt=""
    />
    <div class="space-y-2">
      <h2 class="font-bold text-xl leading-6 text-color1">
      ${pet.pet_name}
      </h2>
      <div class="space-y-2 text-color1.7 leading-5">
        <div class="flex items-center gap-3">
          <img src="./images/breed.svg" alt="" />
          <p>Breed: ${(typeof pet.breed === "string") ? pet.breed : "Not available"}</p>
        </div>
        <div class="flex items-center gap-3">
          <img src="./images/calender.svg" alt="" />
          <p>Birth: ${(typeof pet.date_of_birth === "string") ? (pet.date_of_birth).slice(0,4) : "not Available"}</p>
        </div>
        <div class="flex items-center gap-3">
          <img src="./images/gender.svg" alt="" />
          <p>Gender: ${(typeof pet.gender === "string") ? pet.gender : "Not available"}</p>
        </div>
        <div class="flex items-center gap-3">
          <img src="./images/price.svg" alt="" />
          
          <p>Price: ${(typeof pet.price === "number") ? pet.price + "$"  : "Not available"}</p>
        </div>
      </div>
    </div>
    `;
  }

};
const displayAllPets = (pets) =>{
  const petsContainer = document.getElementById("petsContainer");
  for (const pet of pets) {
    // console.log(pet);
    const petCard = document.createElement("div");
    petsContainer.appendChild(petCard);
    petCard.classList.add('p-5', 'border', 'border-color1.1', 'rounded-xl', 'space-y-3');
    petCard.innerHTML = `
    <img
      class="rounded-lg mb-6 w-full"
      src="${pet.image}"
      alt=""
    />
    <div class="space-y-2">
      <h2 class="font-bold text-xl leading-6 text-color1">
      ${pet.pet_name}
      </h2>
      <div class="space-y-2 text-color1.7 leading-5">
        <div class="flex items-center gap-3">
          <img src="./images/breed.svg" alt="" />
          <p>Breed: ${(typeof pet.breed === "string") ? pet.breed : "Not available"}</p>
        </div>
        <div class="flex items-center gap-3">
          <img src="./images/calender.svg" alt="" />
          <p>Birth: ${(typeof pet.date_of_birth === "string") ? (pet.date_of_birth).slice(0,4) : "Not available"}</p>
        </div>
        <div class="flex items-center gap-3">
          <img src="./images/gender.svg" alt="" />
          <p>Gender: ${(typeof pet.gender === "string") ? pet.gender : "Not available"}</p>
        </div>
        <div class="flex items-center gap-3">
          <img src="./images/price.svg" alt="" />
          <p>Price: ${(typeof pet.price === "number") ? pet.price + "$"  : "Not available"}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="flex justify-between">
      <button
        class="text-color2 font-bold text-xl px-5 py-2 border border-color2.15 rounded-lg"
      >
        <img src="./images/like.svg" alt="" />
      </button>
      <button
        class="text-color2 font-bold text-xl px-5 py-2 border border-color2.15 rounded-lg"
      >
        Adope
      </button>
      <button
        class="text-color2 font-bold text-xl px-5 py-2 border border-color2.15 rounded-lg"
      >
        Details
      </button>
    </div>
    `;    
  }
}