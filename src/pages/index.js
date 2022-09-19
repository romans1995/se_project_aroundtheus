import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import '../pages/index.css';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';

import logo from "../images/logo.svg";
import profileImg from "../images/profilePerson.jpg";
import {
    nameInput,
    aboutInput,
    editPopupForm,
    editPopupFormAddPlace,
    editModeName,
    addPlaceBtn,
    cardSelector,
    elementList,
    logoImg,
    theprofileImg,
    validationSettings
} from '../utils/constants.js'
import { api } from "../components/Api.js";


// console.log(initialElements);
logoImg.src = logo;
theprofileImg.src = profileImg;

const userInfo = new UserInfo(".profile__description-name", ".profile__description-prof");

const openCardPopup = () => {
    popupAddPlace.open();
    addFormValidator.toggleButton();
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
        
    },
    elementList,
);

api.getInitalCards().then(res => {
    section.renderItems(res)
})