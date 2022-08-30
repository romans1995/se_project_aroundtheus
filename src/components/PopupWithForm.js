import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(formSelector, submitHandler) {
        super(formSelector);
        this._form = this._popupElement.querySelector(".popup__inputs-container");
        this.submitHandler = submitHandler;
        this.formSelector = formSelector;
        this.formInputValues = {};
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._inputList.forEach((input) => {
            this.formInputValues[input.name] = input.value;
        });
        return this.formInputValues;
    }
    close = () => {
        super.close();
    };


    setEventListeners() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = this._getInputValues();
            this.submitHandler(data); //this._getInputValues in
            this.close();
            this._form.reset();
        });

        super.setEventListener();

    }
    setInputValues(data) {
        this._inputList.forEach((input) => {
            // here you insert the `value` by the `name` of the input
            input.value = data[input.name];
        });
    }
}
