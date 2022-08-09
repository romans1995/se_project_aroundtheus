import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {

    open(link, text) {
        const imageElment = this._popupElement.querySelector('.popup__image');
        const popupElement = this._popupElement.querySelector('.popup__caption');

        imageElment.src = link;
        popupElement = text;
    }
}
const popupImagenew = PopupWithImage('.popup_image-prev');