const elementsList = [{
        name: "Yosemite Valley",
        link: "./images/element_2.jpg",
    },
    {
        name: "Forest",
        link: "./images/element_1.jpg",
    },

    {
        name: "Lake Louise",
        link: "./images/element_3.jpg",
    },
    {
        name: "Bald Mountains",
        link: "./images/element_4.jpg",
    },

    {
        name: "Vanoise National Park",
        link: "./images/element_6.jpg",
    },
    {
        name: "Latemar",
        link: "./images/element_5.jpg",
    },
];
// elements show
const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__ul");

const addelement = (elem) => {
    const list = document.querySelector(".element-Stracture").content;
    const elementCard = list.querySelector(".element").cloneNode(true);
    const elementTitleElement = elementCard.querySelector(".element__title");
    elementTitleElement.textContent = elem.name;
    const elementImage = elementCard.querySelector(".element__image");
    elementImage.src = elem.link;
    elementImage.alt = `picture of a ${elem.name}`;
    const likeBtn = elementCard.querySelector(".element__likeBtn");
    likeBtn.addEventListener("click", () =>
        likeBtn.classList.toggle("element__likeBtnn_active"));
    return elementCard;
};

const addAllelements = (elem, arr) => {
    arr.appendChild(addelement(elem));
};

elementsList.forEach((elem) => addAllelements(elem, elementList));

// popup

let nameInput = document.getElementsByClassName("popup__name")[0];
let aboutInput = document.getElementsByClassName("popup__description")[0];

const profilInput = document.querySelector(".popup__submit-button");
const EditModeName = document.querySelector(".profile__edit");

let profileName = document.querySelector(".profile__description-name");
let profileAbout = document.querySelector(".profile__description-prof");

EditModeName.addEventListener("click", () => {
    let popup = document.getElementById("popup");
    popup.classList.toggle("popup__active");
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
});
const handleProfileEditSubmit = () => {
    popup.classList.remove("popup__active");
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
};

profilInput.addEventListener("click", handleProfileEditSubmit);
// remove popup 
const popupCloseBtn = document.querySelector(".popup__close-btn");
popupCloseBtn.addEventListener("click", () => {
    popup.classList.remove("popup__active");
});