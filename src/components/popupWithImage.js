import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.imageElment = this._popupElement.querySelector('.popup__image');
        this.popupElement = this._popupElement.querySelector('.popup__caption');

    }
    open(link, text) {
        this.imageElment.src = link;
        this.popupElement = text;
        this.imageElment.alt = `a nice view of a ${text}`;
        super.open();
    }
}