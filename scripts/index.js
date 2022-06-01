// popup
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_description");
const popOverlay = document.querySelector(".popup");
const editPopupForm = document.querySelector(".popup__inputs-container");
const editModeName = document.querySelector(".profile__edit");
const profileName = document.querySelector(".profile__description-name");
const profileAbout = document.querySelector(".profile__description-prof");
const popup_container = document.querySelector(".popup__container");
const popupCloseBtn = document.querySelector(".popup__close-btn");

const editProfileFunction = () => {
    openPopup();
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}
const handleProfileEditSubmit = event => {
    popOverlay.style.display = "none";
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopUp();
    event.preventDefault();
};

const openPopup = () => {
    popup_container.classList.toggle("popup_active");
    popOverlay.style.display = "block"
}

const closePopUp = () => {
    popup_container.classList.remove("popup_active");
    popOverlay.style.display = "none";
}

editModeName.addEventListener("click", editProfileFunction);
editPopupForm.addEventListener("submit", handleProfileEditSubmit);
popupCloseBtn.addEventListener("click", closePopUp);