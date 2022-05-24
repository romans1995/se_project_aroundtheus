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
// cards show

 function handleClick(event) {
    event.target.classList.contains("element__likeBtnn_active") ? event.target.classList.remove('element__likeBtnn_active')  : event.target.classList.add('element__likeBtnn_active');
  };

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