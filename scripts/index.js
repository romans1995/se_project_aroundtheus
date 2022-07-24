import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openPopup, closePopup } from "./utils.js";

const initialElements = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

// popup

const nameInput = document.querySelector(".popup__inputs-type-name");
const aboutInput = document.querySelector(".popup__inputs-type-description");
const profilePopup = document.querySelector(".profile-popup");
const cardPopupAdd = document.querySelector(".popup-addElement");
const editPopupForm = document.querySelector(".popup__inputs-container");
const editPopupFormAddPlace = document.querySelector(
  ".popup__inputs-container-addPlace"
);

const editModeName = document.querySelector(".profile__edit");
const profileName = document.querySelector(".profile__description-name");
const profileAbout = document.querySelector(".profile__description-prof");
const allPopupCloseBtns = document.querySelectorAll(".popup__close-btn");

const allPopups = document.querySelectorAll(".popup");
const submitBtn = document.querySelector(".popup__submit-button");
//end popup

const addPlaceBtn = document.querySelector(".profile__add");
const placeName = document.querySelector(".popup__inputs-type-placeName");
const placeLink = document.querySelector(".popup__inputs-type-placeLink");

//elements
const elementStracture = document.querySelector(".element-Stracture").content;
const cardSelector = ".element-Stracture";
const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__list");
//image preview

//popup functions

const editProfile = () => {
  editFormValidator.enableValidation();
  openPopup(profilePopup);
  fillProfileForm();
};
const fillProfileForm = () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

const handleProfileEditSubmit = (event) => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(profilePopup);
};
const openCardPopup = () => {
  addFormValidator.enableValidation();
  openPopup(cardPopupAdd);
};

const handleAddPlaceSubmit = (event) => {
  event.preventDefault();
  const newElement = {
    name: `${placeName.value}`,
    link: `${placeLink.value}`,
  };
  closePopup(cardPopupAdd);
  prependCard(newElement, elementList);
  editPopupFormAddPlace.reset();
  addFormValidator.toggleButton();
};

const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible",
};

const editFormValidator = new FormValidator(validationSettings, editPopupForm);
const addFormValidator = new FormValidator(
  validationSettings,
  editPopupFormAddPlace
);


//elements functions
// @func

const addElement = (data) => {
  const elementElement = elementStracture
    .querySelector(".element")
    .cloneNode(true);
  const elementTitleElement = elementElement.querySelector(".element__title");
  elementTitleElement.textContent = data.name;
  const likeBtn = elementElement.querySelector(".element__like-button");
  const elementImage = elementElement.querySelector(".element__image");
  elementImage.src = data.link;
  elementImage.alt = `picture of a ${data.name}`;
  const deleteBtn = elementElement.querySelector(".element__delete-button");
  //eventListeners
  elementImage.addEventListener("click", () => previewImage(data));
  deleteBtn.addEventListener("click", () => elementElement.remove());
  likeBtn.addEventListener("click", () =>
    toggleClass(likeBtn, "element__like-button_active")
  );
  return elementElement;
};
const prependCard = (element, list) => {
  const card = new Card(element, cardSelector).addElment();
  list.prepend(card);
};
const toggleClass = (component, add) => {
  component.classList.toggle(add);
};

//popup eventsListeners
// @listens

editModeName.addEventListener("click", editProfile);
addPlaceBtn.addEventListener("click", openCardPopup);
editPopupForm.addEventListener("submit", handleProfileEditSubmit);
editPopupFormAddPlace.addEventListener("submit", handleAddPlaceSubmit);
allPopupCloseBtns.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

//element
initialElements.forEach((element) => prependCard(element, elementList));
