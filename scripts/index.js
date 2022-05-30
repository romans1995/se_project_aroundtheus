// popup

const nameInput = document.querySelector(".popup__inputs_name");
const aboutInput = document.querySelector(".popup__inputs_description");


const profilInput = document.querySelector(".popup__inputs_submit-button");
const EditModeName = document.querySelector(".profile__edit");

let profileName = document.querySelector(".profile__description-name");
let profileAbout = document.querySelector(".profile__description-prof");
const popup = document.querySelector("#popup");

const editProfileFunction = () => {
    openpopup();
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}
const handleProfileEditSubmit = (event) => {
    event.preventDefault();
    closePopUp();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
};
EditModeName.addEventListener("click", editProfileFunction);

profilInput.addEventListener("submit", handleProfileEditSubmit);
// remove popup 
const popupCloseBtn = document.querySelector(".popup__close-btn");

const openpopup = (event) => {
    popup.classList.toggle("popup__active");
}
const overlaypopup = ()=>{

}
const closePopUp = () => {
    popup.classList.remove("popup__active");
}
popupCloseBtn.addEventListener("click", closePopUp);