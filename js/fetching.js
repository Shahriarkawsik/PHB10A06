// loadSingleCategoryPets
async function loadSingleCategoryPets(id){
  try{
    const res =await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
    const {data} = await res.json();
    displayAllPets(data);
  }
  catch(error){
    console.error('Error fetching data:', error);
  }
    
  // console.log(id);
}
//displayCategoryBtn 
function displayCategoryBtn(categories) {
  const categoryBtnSection = document.getElementById("categoryBtn");
  for (const item of categories) {
    const categoryBtnContainer = document.createElement("div");
    categoryBtnSection.appendChild(categoryBtnContainer);
    categoryBtnContainer.classList.add('categoryBtn', 'inactiveBtn');
    categoryBtnContainer.innerHTML = `
      <button class="flex justify-center items-center gap-4" onclick="loadSingleCategoryPets('${item.category}')">
        <img src="${item.category_icon}" alt="" />
        <h1 class="font-bold text-24 leading-7">${item.category}</h1>
      </button>   
    `;
  }
}

// fetchCategoryBtn
async function loadCategoryBtn() {
  try{
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await res.json();
    displayCategoryBtn(data.categories);
  }catch(error){
    console.error('Error fetching data:', error);    
  }
}
loadCategoryBtn();

// display all pets
function displayAllPets(pets){
  const petsContainer = document.getElementById("petsContainer");
  petsContainer.innerHTML = "";
  if(pets.length == 0){
    petsContainer.classList.remove("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-2", "2xl:grid-cols-3", "gap-6");
    petsContainer.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'text-center', 'bg-color1.03', 'rounded-3xl', 'p-8', 'sm:p-12', 'lg:p-24');
    // petsContainer.innerHTML = "No content";
    petsContainer.innerHTML = `
        <img src="./images/error.webp" alt="" />
        <h2 class="text-color1 text-32 font-bold font-Inter leading-10 my-4">
          No Information Available
        </h2>
        <p class="text-color1.7 leading-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a.
        </p>      
    `;    
    return;
  }
  petsContainer.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-2", "2xl:grid-cols-3", "gap-6");
    petsContainer.classList.remove('flex', 'flex-col', 'justify-center', 'items-center', 'text-center', 'bg-color1.03', 'rounded-3xl', 'p-8', 'sm:p-12', 'lg:p-24');
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
// Fetch All Pets
async function loadAllPets() {
  try{
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    displayAllPets(data.pets);
  }
  catch(error){
    console.error('Error fetching data:', error);
    
  }
}
loadAllPets()
