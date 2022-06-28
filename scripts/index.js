const initialelements = [{
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

const allpopups = document.querySelectorAll(".popup");
const activePopup = document.querySelector(".popup__container");
const submitBtn = document.querySelector(".popup__submit-button");
//end popup

const addPlaceBtn = document.querySelector(".profile__add");
const placeName = document.querySelector(".popup__inputs-type-placeName");
const placeLink = document.querySelector(".popup__inputs-type-placeLink");

//elements
const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__list");
//image preview

const imgPrevModal = document.querySelector(".popup_image-prev");
const popupImage = imgPrevModal.querySelector(".popup__image");
const popupCaption = imgPrevModal.querySelector(".popup__caption");

//popup functions

const editProfile = () => {
    openPopup(profilePopup);
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    // submitBtn.disabled = true;
};

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
    placeName.value = "";
    placeLink.value = "";
};

const openPopup = (elem) => {
    elem.classList.add("popup_active");
};

const closePopUp = (elem) => {
    elem.classList.remove("popup_active");
};

//elements functions
const addElement = (data) => {
    const elementStracture = document.querySelector(".element-Stracture").content;
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
    openPopup(imgPrevModal);
};

//popup eventsListeners

editModeName.addEventListener("click", editProfile);
addPlaceBtn.addEventListener("click", openCardPopup);
editPopupForm.addEventListener("submit", handleProfileEditSubmit);
editPopupFormAddPlace.addEventListener("submit", handleAddPlaceSubmit);
allPopupCloseBtns.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => closePopUp(popup));
});
// project 6

allpopups.forEach((popup) => {
    const className = popup.classList[1];
    const sectionPopup = document.querySelector(`.${className}`);
    // make sure when you open popup submit button is disabled 
    const subBtn = sectionPopup.querySelector(".popup__submit-button");
    let btnArr = [];
    btnArr.push(subBtn);
    btnArr.forEach((btn) => {
        if (btn !== null) {
            btn.disabled = true;
        }
    });
    // press esc to exit popup 
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closePopUp(sectionPopup);
        }
    });
    // remove popup when clicks outside the popup
    sectionPopup.addEventListener("click", (e) => {
        let thisPopup = !sectionPopup.querySelector(".popup__container") ?
            sectionPopup.querySelector(".popup__image-prev-container") :
            sectionPopup.querySelector(".popup__container");
        if (!thisPopup.contains(e.target)) {
            closePopUp(sectionPopup);
        }
    });
});

//element
initialelements.forEach((element) => prependCard(element, elementList));