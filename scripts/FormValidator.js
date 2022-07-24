class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector("#" + input.id + "-error");
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }
  _showInputError(input) {
    const errorElement = this._form.querySelector("#" + input.id + "-error");
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  _checkInputValidity(input) {
    if (input.checkValidity()) {
      this._hideInputError(input);
    } else {
      this._showInputError(input, this._form);
    }
  }

  isFormValid(inputs) {
    return inputs.every((input) => input.validity.valid === true);
  }

  toggleButton(inputs) {
    const button = this._form.querySelector(".popup__submit-button");
    if (this.isFormValid(inputs)) {
      button.removeAttribute("disabled");
    } else {
      button.disabled = true;
    }
  }

  _setEventListeners() {
    const inputs = [...this._form.querySelectorAll(this._inputSelector)];
    this.toggleButton(inputs);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        // check validity
        this._checkInputValidity(input);
        // toggle the button
        this.toggleButton(inputs);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(this._form);
  }
}
export default FormValidator;
