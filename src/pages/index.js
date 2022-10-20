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
    validationSettings,
    avatarImage,
    avatarFormValidation
} from '../utils/constants.js';
import { api } from "../components/Api.js";
import {PopupWithSubmit} from '../components/PopupWithSubmit.js';


let userId;
Promise.all([api.getInitalCards(), api.getUserInformation()])
    .then(([cardData, userInfoData]) => {
        userId = userInfoData._id;
        section.renderItems(cardData);
        userInfo.setUserInfo(userInfoData.name, userInfoData.about);
        userInfo.setUserAvatar(userInfoData.avatar);
    })
logoImg.src = logo;
theprofileImg.src = profileImg;

const userInfo = new UserInfo(".profile__description-name", ".profile__description-prof", ".profile__img");
const openCardPopup = () => {
    popupAddPlace.open();
    addFormValidator.toggleButton();
};

const openImageAvatar = () => {
    popupChangeAvatrImage.open();
    addFormValidator.toggleButton();
}

const editFormValidator = new FormValidator(validationSettings, editPopupForm);
const addFormValidator = new FormValidator(
    validationSettings,
    editPopupFormAddPlace,
);
const addFormValidatorAvtar = new FormValidator(
    validationSettings,
    avatarFormValidation,
);



// popup class based

const popupEditProfile = new PopupWithForm(".profile-popup", (data) => {
    popupEditProfile.loadingRender(true,"Saving...");
    userInfo.setUserInfo(data.name, data.job);
    api.setUserInfo(data.name, data.job)
    .catch((err) => console.log(err))
    .finally(() => popupEditProfile.loadingRender(false));
});
popupEditProfile.setEventListeners();

const popupPreviewImage = new PopupWithImage('.popup_image-prev');
popupPreviewImage.setEventListener();

const confirmDelete = new PopupWithSubmit('.popup-deleteCard');
confirmDelete.setEventListeners();


const editProfile = () => {
    popupEditProfile.open();
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.title;

};

const popupChangeAvatrImage = new PopupWithForm('.popup-editAvatar', (data) => {
    popupChangeAvatrImage.loadingRender(true,"Saving...");
    api.setAvatarImage(data.link).then(res => {
        userInfo.setUserAvatar(res.avatar);
    })
    .finally(() => popupChangeAvatrImage.loadingRender(false));
});

const popupAddPlace = new PopupWithForm('.popup-addElement', (data) => {
    popupAddPlace.loadingRender(true,"Saving...");
    api.createCard(data)
        .then(data => {
            section.addItem(createCard(data));
        }) 
        .finally(() => popupAddPlace.loadingRender(false));

});
popupAddPlace.setEventListeners();
popupChangeAvatrImage.setEventListeners();
editFormValidator.enableValidation();
addFormValidator.enableValidation();
addFormValidatorAvtar.enableValidation();
//elements functions
// @func


const createCard = (element) => {
    const card = new Card(element, cardSelector, {
        userId,
        handleClickCard: () => {
            popupPreviewImage.open(element.link, element.name);
        },
        handleLike: (id) => {
            const isAlreayLiked = card.isLiked();
            if (isAlreayLiked) {
                api.dislikeCard(id)
                    .then(res => card.likeCards(res.likes))
            } else {
                api.likeCard(id)
                    .then(res => {
                        console.log(res);
                        card.likeCards(res.likes)
                    })
            }
        },
        handleDeleteCard: (id) => {
            confirmDelete.open();
            confirmDelete.setAction(
                () => {
                    api.deleteCard(id)
                        .then(res => {
                            card.handleElmentRemove();
                            confirmDelete.close();
                        })
                })
                
        }
    });

    return card.addElment();
};

const prependCard = (element) => {
    const card = createCard(element);
    section.addItem(card)
};

//popup eventsListeners
// @listens

editModeName.addEventListener('click', editProfile);
addPlaceBtn.addEventListener('click', openCardPopup);
avatarImage.addEventListener('click', openImageAvatar);

const section = new Section({
        renderer: prependCard},
    elementList,
);