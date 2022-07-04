const hideInputError = (input, formElement, { errorClass }) => {
    const errorElement = formElement.querySelector("#" + input.id + "-error");
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
};
const showInputError = (input, formElement, { errorClass }) => {
    const errorElement = formElement.querySelector("#" + input.id + "-error");
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(errorClass);
};

const checkInputValidity = (formElement, input, settings) => {
    if (input.validity.valid) {
        hideInputError(input, formElement, settings);
    } else {
        showInputError(input, formElement, settings);
    }
};

const isFormValid = (inputs) => {
    return inputs.every(input => input.validity.valid === true);
}

const toggleButton = (inputs, formElement) => {
    
    const button = formElement.querySelector(".popup__submit-button");
    if (isFormValid(inputs)) {
        button.removeAttribute("disabled");
    } else {
        button.disabled = true;
    }

}
const setEventListeners = (formElement, settings) => {
    const inputs = [...formElement.querySelectorAll(settings.inputSelector)];
    toggleButton(inputs, formElement, settings); 
    inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            // check validity 
            checkInputValidity(formElement, input, settings);
            // toggle the button 
            toggleButton(inputs, formElement, settings);
        });
    });
};
const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach((formElement) => {
        formElement.addEventListener("submit", (e) => e.preventDefault());
        setEventListeners(formElement, settings);
    });
};
enableValidation({
    formSelector: ".popup__inputs-container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input-error",
    errorClass: "popup__error_visible",
});