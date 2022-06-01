// popup

const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_description");
const popoverlay = document.querySelector(".popup");

const profilInputSubmit = document.querySelector(".popup__inputs_submit-button");
const EditModeName = document.querySelector(".profile__edit");

const profileName = document.querySelector(".profile__description-name");
const profileAbout = document.querySelector(".profile__description-prof");
const popup_container = document.querySelector(".popup__container");
const popupCloseBtn = document.querySelector(".popup__close-btn");

const editProfileFunction = () => {
    openPopup();
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}
const handleProfileEditSubmit = (event) => {
    event.preventDefault();

    popoverlay.style.display = "none";
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopUp();
};

const openPopup = () => {
    popup_container.classList.toggle("popup_active");
    popoverlay.style.display = "block"
}

const closePopUp = () => {
    popup_container.classList.remove("popup_active");
    popoverlay.style.display = "none";

}
EditModeName.addEventListener("click", editProfileFunction);
profilInputSubmit.addEventListener("submit", handleProfileEditSubmit);
popupCloseBtn.addEventListener("click", closePopUp);