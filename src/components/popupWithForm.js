import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(formSelector, submitHandler) {
        super(formSelector);
        this._form = document.querySelector(formSelector);
        this.submitHandler = submitHandler;
        this.formSelector = formSelector;
        this.formInputValues = {};
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._inputList.forEach((input) => {
            this.formInputValues[input.name] = input.value;
        });

        return this.formInputValues;
    }

    // submitPopupHandler() {}

    setEventListeners() {
        console.log(this._form);
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            super.close();
            const data = this._getInputValues();
            this.submitHandler(data); //this._getInputValues in
        });
        // document.querySelector(this.formSelector);
    }
}