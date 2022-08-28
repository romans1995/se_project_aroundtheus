import FormValidator from './components/FormValidator.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import './pages/index.css';
import { PopupWithForm } from './components/PopupWithForm.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { UserInfo } from './components/UserInfo.js';

import logo from "./images/logo.svg";
import profileImg from "./images/profilePerson.jpg";
const initialElements = [{
        name: 'Yosemite Valley',
        link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
    },
    {
        name: 'Lake Louise',
        link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
    },
    {
        name: 'Bald Mountains',
        link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
    },
    {
        name: 'Latemar',
        link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
    },
    {
        name: 'Vanoise National Park',
        link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
    },
    {
        name: 'Lago di Braies',
        link: 'https://code.s3.yandex.net/web-code/lago.jpg',
    },
];

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

// const fillProfileForm = () => {
//     nameInput.value = profileName.textContent;
//     aboutInput.value = profileAbout.textContent;
// };

const fillProfileForm = new UserInfo(nameInput.value, aboutInput.value);

const openCardPopup = () => {
    popupAddPlace.open();
    // openPopup(cardPopupAdd);
};

// const handleAddPlaceSubmit = (event) => {
//     event.preventDefault();
//     const newElement = {
//         name: `${placeName.value}`,
//         link: `${placeLink.value}`,
//     };
//     closePopup(cardPopupAdd);
//     prependCard(newElement, elementList);
//     editPopupFormAddPlace.reset();
//     const inputs = [...cardPopupAdd.querySelectorAll('.popup__input')];
//     addFormValidator.toggleButton(inputs, cardPopupAdd);
// };

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

const popupEditProfile = new PopupWithForm('.profile-popup', (data) => {
    profileName.textContent = data[nameInput.name];
    profileAbout.textContent = data[aboutInput.name];
});

const popupPreviewImage = new PopupWithImage('.popup_image-prev');
popupPreviewImage.setEventListener();


popupEditProfile.setEventListeners();
const editProfile = () => {
    // openPopup(profilePopup);
    popupEditProfile.open();
    fillProfileForm();
};

const popupAddPlace = new PopupWithForm('.popup-addElement', (data) => {
    // event.preventDefault();
    const newElement = {
        name: `${data[placeName.name]}`,
        link: `${data[placeLink.name]}`,
    };
    // closePopup(cardPopupAdd);

    section.addItem(createCard(newElement));
    editPopupFormAddPlace.reset();
    const inputs = [...cardPopupAdd.querySelectorAll('.popup__input')];
    addFormValidator.toggleButton(inputs, cardPopupAdd);
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
    elementList.prepend(card);
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