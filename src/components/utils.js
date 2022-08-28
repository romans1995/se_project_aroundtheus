const imgPreviewModal = document.querySelector(".popup_image-prev");
const popupImage = imgPreviewModal.querySelector(".popup__image");
const popupCaption = imgPreviewModal.querySelector(".popup__caption");

export const previewImage = (link, text) => {
    popupImage.src = link;
    popupImage.alt = `A beautiful place in ${text}`;
    popupCaption.textContent = text;
    openPopup(imgPreviewModal);
};

export const openPopup = (elem) => {
    elem.classList.add("popup_active");
    document.addEventListener("keydown", closePopupByEscape);
    elem.addEventListener("mousedown", closePopupOnRemoteClick);
};

function closePopupByEscape(event) {
    if (event.key === "Escape") {
        // search for an opened popup
        const openedPopup = document.querySelector(".popup_active");
        // close it
        closePopup(openedPopup);
    }
}
const closePopupOnRemoteClick = (event) => {
    // target is the element on which the event happened
    // currentTarget is the popup
    // if they are the same then we should close the popup
    if (event.target === event.currentTarget) {
        closePopup(event.target);
    }
}
export const closePopup = (elem) => {
    elem.classList.remove("popup_active");
    document.removeEventListener("keydown", closePopupByEscape);
    elem.removeEventListener("mousedown", closePopupOnRemoteClick);
};