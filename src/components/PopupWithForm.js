import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(formSelector, submitHandler) {
        super(formSelector);
        this._form = this._popupElement.querySelector(".popup__inputs-container");
        this.submitHandler = submitHandler;
        this.formSelector = formSelector;
        this.formInputValues = {};
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._buttonSubmit = this._form.querySelector('.popup__submit-button');
        this._buttonSubmitText = this._buttonSubmit.textContent;
    }

    _getInputValues() {
        this._inputList.forEach((input) => {
            this.formInputValues[input.name] = input.value;
        });
        return this.formInputValues;
    }
    close = () => {
        super.close();
        this._form.reset();
    };
    loadingRender(isLoading, textLoading = "saving...") {
        isLoading ? this._buttonSubmit.textContent = textLoading : this._buttonSubmit.textContent = this._buttonSubmitText;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = this._getInputValues();
            this.submitHandler(data); //this._getInputValues in

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