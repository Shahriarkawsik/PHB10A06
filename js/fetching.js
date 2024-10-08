// loadSingleCategoryPets
function loadSingleCategoryPets(categoryName,btnId){
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
  .then(res => res.json())
  .then((data)=>{
    // removeInactiveClass();
    // const activeBtn = document.getElementById(`${btnId}`);
    // activeBtn.classList.add('rounded-full', 'bg-color2.1', 'border-color2.1');
    displayAllPets(data.data);
  });
}
function removeInactiveClass(){
  const activeBtn = document.getElementsByClassName("inactiveBtn");
  for (const btn of activeBtn) {
    console.log(btn);
    btn.classList.remove('inactiveBtn'); 
    // activeBtn.classList.remove('rounded-full', 'bg-color2.1', 'border-color2.1');    
  }  
}
// display single img on right div
function showSingleImg(imgLink){
  const petsImageContainer = document.getElementById("petsImageContainer");
  const img = document.createElement("img");
  img.classList.add("rounded-md");
  img.setAttribute("src", imgLink);
  petsImageContainer.appendChild(img);
}
// show details on modals
function showDetails(petDetails){
  const myModal = document.getElementById("myModal");
  myModal.showModal();
  myModal.innerHTML = `
  <div class="modal-box space-y-5">
          <img
            class="w-full object-cover rounded-lg"
            src="${petDetails.image}"
            alt=""
          />
          <h2 class="font-Inter font-bold text-2xl text-color1 leading-7">
            ${petDetails.pet_name}
          </h2>
          <div class="grid grid-cols-2 gap-8 text-color1.7 leading-5">
            <div class="space-y-2">
              <div class="flex gap-3">
                <img src="./images/breed.svg" alt="" />
                <p>
                  Breed: ${(typeof petDetails.breed === "string") ?
                  petDetails.breed : "Not available"}
                </p>
              </div>
              <div class="flex gap-3">
                <img src="./images/gender.svg" alt="" />
                <p>
                  Gender: ${(typeof petDetails.gender === "string") ?
                  petDetails.gender : "Not available"}
                </p>
              </div>
              <div class="flex gap-3">
                <img src="./images/gender.svg" alt="" />
                <p>
                  Vaccinated status: ${(typeof petDetails.vaccinated_status ===
                  "string") ? petDetails.vaccinated_status : "Not available"}
                </p>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex gap-3">
                <img src="./images/calender.svg" alt="" />
                <p>Birth:</p>
                <p>
                  Birth: ${(typeof petDetails.date_of_birth === "string") ?
                  (petDetails.date_of_birth).slice(0,4) : "Not available"}
                </p>
              </div>
              <div class="flex gap-3">
                <img src="./images/price.svg" alt="" />
                <p>Price:</p>
                <p>
                  Price: ${(typeof petDetails.price === "number") ?
                  petDetails.price + "$" : "Not available"}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <h2 class="font-Inter font-semibold text-color1 leading-5 my-3">
            Details Information
          </h2>
          <div class="font-Inter leading-6 text-color1.7 text-justify">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <li>
              The point of using is that it has a more-or-less normal
              distribution of letters, as opposed to using.
            </li>
          </div>
          <div class="">
            <!-- modal-action -->
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button
                class="btn w-full text-color2 bg-color2.1 border border-color2.2 rounded-lg"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
  `;
}
// show adope modal
function showAdopeModal(){
  const adopeModal = document.getElementById("adopeModal");
  adopeModal.showModal()
  const countdown = document.getElementById("countdown");

  let countdownValue = 3; 
  // Show the modal
  countdown.textContent = countdownValue;
  const countdownInterval = setInterval(() => {
    countdownValue--;
    countdown.textContent = countdownValue; 
    if (countdownValue === 1) {
      clearInterval(countdownInterval);
      adopeModal.close()
    }
  }, 1000); // Run every 1 second
}
// fetch details on modals
async function fetchDetails(petId){
  try{
    const res =await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
    const data = await res.json();
    showDetails(data.petData);
  }
  catch(error){
    console.error('Error fetching data:', error);
  }
}
//displayCategoryBtn 
function displayCategoryBtn(categories) {
  const categoryBtnSection = document.getElementById("categoryBtn");

  for (const item of categories) {
    const categoryBtnContainer = document.createElement("div");
    categoryBtnContainer.setAttribute('id', `btn-${item.id}`);
    // removeInactiveClass(`btn-${item.id}`);
    categoryBtnSection.appendChild(categoryBtnContainer);
    categoryBtnContainer.classList.add('categoryBtn', 'inactiveBtn');
    categoryBtnContainer.innerHTML = `
      <button class="flex justify-center items-center gap-4" onclick="loadSingleCategoryPets('${item.category}','btn-${item.id}')">
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
        class="text-color2 font-bold text-xl px-5 py-2 border border-color2.15 rounded-lg" onclick="showSingleImg('${pet.image}')"
      >
        <img src="./images/like.svg" alt="" />
      </button>
      <button
        class="text-color2 font-bold text-xl px-5 py-2 border border-color2.15 rounded-lg" onclick="showAdopeModal()" 
      >
        Adope
      </button>
      <button
        class="text-color2 font-bold text-xl px-5 py-2 border border-color2.15 rounded-lg" onclick="fetchDetails('${pet.petId}')"
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
