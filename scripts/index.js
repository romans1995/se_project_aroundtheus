
// popup

const nameInput = document.querySelector(".popup__inputs_name");
const aboutInput = document.querySelector(".popup__inputs_description");

const profilInput = document.querySelector(".popup__inputs_submit-button");
const EditModeName = document.querySelector(".profile__edit");

let profileName = document.querySelector(".profile__description-name");
let profileAbout = document.querySelector(".profile__description-prof");
const popup = document.querySelector("#popup"); 

const editProfileFunction = () =>{
  
popup.classList.toggle("popup__active");
nameInput.value = profileName.textContent;
aboutInput.value = profileAbout.textContent;}
const handleProfileEditSubmit = (event) => {
    event.preventDefault();
    popup.classList.remove("popup__active");
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
};
EditModeName.addEventListener("click", editProfileFunction);

profilInput.addEventListener("click", handleProfileEditSubmit);
// remove popup 
const popupCloseBtn = document.querySelector(".popup__close-btn");
popupCloseBtn.addEventListener("click", () => {
    popup.classList.remove("popup__active");
});