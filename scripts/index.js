// popup

const nameInput = document.querySelector(".popup__inputs_name");
const aboutInput = document.querySelector(".popup__inputs_description");
const popoverlay = document.querySelector(".popup");

const profilInput = document.querySelector(".popup__inputs_submit-button");
const EditModeName = document.querySelector(".profile__edit");

let profileName = document.querySelector(".profile__description-name");
let profileAbout = document.querySelector(".profile__description-prof");
const popup = document.querySelector("#popup");

const editProfileFunction = () => {
    openPopup();
    overlaypopup();
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}
const handleProfileEditSubmit = (event) => {
    event.preventDefault();
    closePopUp();
    popoverlay.style.display = "none";
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
};
EditModeName.addEventListener("click", editProfileFunction);

profilInput.addEventListener("submit", handleProfileEditSubmit);
// remove popup 
const popupCloseBtn = document.querySelector(".popup__close-btn");

const openPopup = () => {
    popup.classList.toggle("popup__active");
}
const overlaypopup = () => {
    popoverlay.style.display = "none" ? popoverlay.style.display = "block" : popoverlay.style.display = "none";
}
const closePopUp = () => {
    popup.classList.remove("popup__active");
    popoverlay.style.display = "none";

}
popupCloseBtn.addEventListener("click", closePopUp);
// popoverlay.addEventListener("click", closePopUp);