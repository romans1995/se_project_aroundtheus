import FormValidator from './components/FormValidator.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import './pages/index.css';
import { PopupWithForm } from './components/PopupWithForm.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { UserInfo } from './components/UserInfo.js';
import { initialElements } from './utils/constants.js'
import logo from "./images/logo.svg";
import profileImg from "./images/profilePerson.jpg";


// popup

const nameInput = document.querySelector('.popup__inputs-type-name');
const aboutInput = document.querySelector('.popup__inputs-type-description');
const profilePopup = document.querySelector('.profile-popup');
const cardPopupAdd = document.querySelector('.popup-addElement');
const editPopupForm = document.querySelector('.popup__inputs-container');
const editPopupFormAddPlace = document.querySelector(
    '.popup__inputs-container-addPlace',
);

const editModeName = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__description-name');
const profileAbout = document.querySelector('.profile__description-prof');
const allPopupCloseBtns = document.querySelectorAll('.popup__close-btn');

// const allPopups = document.querySelectorAll(".popup");
// const submitBtn = document.querySelector(".popup__submit-button");
//end popup

const addPlaceBtn = document.querySelector('.profile__add');
const placeName = document.querySelector('.popup__inputs-type-placeName');
const placeLink = document.querySelector('.popup__inputs-type-placeLink');

//elements
const cardSelector = '.element-Stracture';
const elements = document.querySelector('.elements');
const elementList = elements.querySelector('.elements__list');
//image preview

// imgs
const logoImg = document.querySelector('.header__logo');
const theprofileImg = document.querySelector('.profile__img');
logoImg.src = logo;
theprofileImg.src = profileImg;
// end of imgs 
//popup functions

const userInfo = new UserInfo(".profile__description-name", ".profile__description-prof");

const openCardPopup = () => {
    popupAddPlace.open();
    addFormValidator.toggleButton();
};


const validationSettings = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible',
};


const editFormValidator = new FormValidator(validationSettings, editPopupForm);
const addFormValidator = new FormValidator(
    validationSettings,
    editPopupFormAddPlace,
);


// popup class based

const popupEditProfile = new PopupWithForm(".profile-popup", (data) => {
    userInfo.setUserInfo(data.name, data.job);
});
popupEditProfile.setEventListeners();

const popupPreviewImage = new PopupWithImage('.popup_image-prev');
popupPreviewImage.setEventListener();



const editProfile = () => {
    popupEditProfile.open();
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.title;

};

const popupAddPlace = new PopupWithForm('.popup-addElement', (data) => {
    // event.preventDefault();
    const newElement = {
        name: `${data.placeName}`,
        link: `${data.placeLink}`,
    };
    // closePopup(cardPopupAdd);
    // console.log(newElement);
    section.addItem(createCard(newElement));
});
popupAddPlace.setEventListeners();

editFormValidator.enableValidation();
addFormValidator.enableValidation();
//elements functions
// @func

const createCard = (element) => {
    const card = new Card(element, cardSelector, {
        handleClickCard: () => {
            popupPreviewImage.open(element.link, element.name);
        }
    }).addElment();
    return card;
};

const prependCard = (element) => {
    const card = createCard(element);
    section.addItem(card)
};

//popup eventsListeners
// @listens

editModeName.addEventListener('click', editProfile);
addPlaceBtn.addEventListener('click', openCardPopup);

const section = new Section({
        renderer: prependCard,
        items: initialElements,
    },
    elementList,
);
section.renderItems();