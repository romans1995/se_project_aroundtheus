class FormValidator {
  constructor(settings, formElement) {

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
    this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
  this._button = this._form.querySelector( this._submitButtonSelector);

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

  isFormValid() {
    return this._inputs.every((input) => input.validity.valid === true);
  }

  toggleButton() {
    if (this.isFormValid()) {
        this._button.removeAttribute("disabled");
    } else {
      this._button.disabled = true;
    }
  }

  _setEventListeners() {
    console.log(this._inputs);
    this.toggleButton(this._inputs);
    this._inputs.forEach((input) => {
        input.addEventListener("input", () => {
        // check validity
        this._checkInputValidity(input);
        // toggle the button
        this.toggleButton(input);
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
