// popup

const nameInput = document.querySelector(".popup__inputs_type_name");
const aboutInput = document.querySelector(".popup__inputs_type_description");
const popOverlay = document.querySelector(".popup");
const editPopupForm = document.querySelector(".popup__inputs-container");
const editModeName = document.querySelector(".profile__edit");
const profileName = document.querySelector(".profile__description-name");
const profileAbout = document.querySelector(".profile__description-prof");
const popupCloseBtn = document.querySelector(".popup__close-btn");

//popup functions

const editProfileFunction = () => {
    openPopup();
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

const handleProfileEditSubmit = event => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopUp();

};

const openPopup = () => {
    popOverlay.classList.add("popup_active");

}

const closePopUp = () => {
    popOverlay.classList.remove("popup_active");

}

//popup eventsListeners

editModeName.addEventListener("click", editProfileFunction);
editPopupForm.addEventListener("submit", handleProfileEditSubmit);
popupCloseBtn.addEventListener("click", closePopUp);