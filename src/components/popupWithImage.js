import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(link, text) {
        const imageElment = this._popupElement.querySelector('.popup__image');
        const popupElement = this._popupElement.querySelector('.popup__caption');
        imageElment.src = link;
        popupElement = text;
        imageElment.alt = `a nice view of a ${text}`;
        super.open();
    }
}