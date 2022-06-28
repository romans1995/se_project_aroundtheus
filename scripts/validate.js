const hideInputError = (input, formElement, { errorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error");
    errorSpan.textContent = "";
    errorSpan.classList.remove(errorClass);
};
const showInputError = (input, formElement, { errorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error");
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(errorClass);
};

const checkInputValidity = (formElement, input, settings) => {
    if (input.validity.valid) {
        hideInputError(input, formElement, settings);
    } else {
        showInputError(input, formElement, settings);
    }
};

const hasValidInputs = (inputs) => {
    return inputs.every(input => input.validity.valid === true);
}

const toggleButton = (inputs, formElement) => {
    const disabledButton = formElement.querySelector("button");
    if (hasValidInputs(inputs)) {
        disabledButton.removeAttribute("disabled");
    } else {
        disabledButton.disabled = true;
    }

}
const setEventListeners = (formElement, settings) => {
    const inputs = [...formElement.querySelectorAll(settings.inputSelector)];
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