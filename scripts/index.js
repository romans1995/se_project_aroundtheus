const initialElements = [{
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
const activePopup = document.querySelector(".popup__container");
const submitBtn = document.querySelector(".popup__submit-button");
//end popup

const addPlaceBtn = document.querySelector(".profile__add");
const placeName = document.querySelector(".popup__inputs-type-placeName");
const placeLink = document.querySelector(".popup__inputs-type-placeLink");

//elements
const elementStracture = document.querySelector(".element-Stracture").content;
const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__list");
//image preview

const imgPreviewModal = document.querySelector(".popup_image-prev");
const popupImage = imgPreviewModal.querySelector(".popup__image");
const popupCaption = imgPreviewModal.querySelector(".popup__caption");

//popup functions

const editProfile = () => {
    openPopup(profilePopup);
    fillProfileForm(nameInput.value, profileName.textContent);
    fillProfileForm(aboutInput.value, profileAbout.textContent);
};
const fillProfileForm = (val, text) => {
    val = text
}

const handleProfileEditSubmit = (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopUp(profilePopup);
};
const openCardPopup = () => {
    openPopup(cardPopupAdd);
};

const handleAddPlaceSubmit = (event) => {
    event.preventDefault();
    const newElement = {
        name: `${placeName.value}`,
        link: `${placeLink.value}`,
    };
    closePopUp(cardPopupAdd);
    prependCard(newElement, elementList);
    editPopupFormAddPlace.reset();
};

const openPopup = (elem) => {
    elem.classList.add("popup_active");
    const className =  elem.classList[2];
    const sectionPopup = document.querySelector(`.${className}`);
   if(!sectionPopup.classList.contains("popup_image-prev")){
    // make sure when you open popup submit button is disabled 
    const inputs = [...sectionPopup.querySelectorAll(".popup__input")];
    toggleButton(inputs,sectionPopup);
   }
   document.addEventListener("keydown", closePopupByEscape);
   sectionPopup.addEventListener("mousedown", closePopupOnRemoteClick);
};

const closePopUp = (elem) => {
    elem.classList.remove("popup_active");
    document.removeEventListener("keydown", closePopupByEscape)
    activePopup.removeEventListener("mousedown", closePopupOnRemoteClick);
};
 



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
    list.prepend(addElement(element));
};
const toggleClass = (component, add) => {
    component.classList.toggle(add);
};

const previewImage = (element) => {
    popupImage.src = element.link;
    popupImage.alt = `A beautiful place in ${element.name}`;
    popupCaption.textContent = element.name;
    openPopup(imgPreviewModal);
};

//popup eventsListeners
// @listens

editModeName.addEventListener("click", editProfile);
addPlaceBtn.addEventListener("click", openCardPopup);
editPopupForm.addEventListener("submit", handleProfileEditSubmit);
editPopupFormAddPlace.addEventListener("submit", handleAddPlaceSubmit);
allPopupCloseBtns.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => closePopUp(popup));
});
// project 6 functions
function closePopupByEscape(event) {
    if (event.key === "Escape") {
       // search for an opened popup
      const openedPopup = document.querySelector(".popup_active");
       // close it
       closePopUp(openedPopup)
    }
  } 

function closePopupOnRemoteClick(event) {
    // target is the element on which the event happened
    // currentTarget is the popup
    // if they are the same then we should close the popup
    if (event.target === event.currentTarget) { 
        closePopUp(event.target);
    }
  }

//element
initialElements.forEach((element) => prependCard(element, elementList));