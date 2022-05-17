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
const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__ul");

let template = document.createElement("template");
template.classList.add("element-Stracture");


let list = document.createElement("li");
list.classList.add("element");


const elementImage = document.createElement("img");
elementImage.classList.add("element__image");

let divelement = document.createElement("div");
divelement.classList.add("element__title-area");
const likeBtn = document.createElement("button");
likeBtn.classList.add("element__likeBtn")
likeBtn.setAttribute("type", "button")
list.appendChild(elementImage);
list.appendChild(divelement);



let elementTitle = document.createElement("h2");
elementTitle.classList.add("element__title");
divelement.appendChild(elementTitle);
divelement.appendChild(likeBtn);


const addelement = (elem) => {
    const elementCard = list.cloneNode(true);
    const elementTitleElement = elementCard.querySelector(".element__title");
    elementTitleElement.textContent = elem.name;
    const elementImage = elementCard.querySelector(".element__image");
    elementImage.src = elem.link;
    elementImage.alt = `picture of a ${elem.name}`;
    const likeBtn = elementCard.querySelector(".element__likeBtn");
    likeBtn.addEventListener("click", () =>
        addClass(likeBtn, "element__likeBtnn_active"));
    return elementCard;
}

const addClass = (component, add) => {
    component.classList.toggle(add);
};

const addAllelements = (elem, arr) => {
    arr.prepend(addelement(elem));
};

elementsList.forEach((elem) => addAllelements(elem, elementList));

let nameInput = document.getElementsByClassName(
    "popup__name"
)[0];
let aboutInput = document.getElementsByClassName(
    "popup__description"
)[0];

const profilInput = document.querySelector(".popup__submit_button");
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

const popupCloseBtn = document.querySelector(".popup__close-btn");
popupCloseBtn.addEventListener("click", () => {
    popup.classList.remove("popup__active");
})