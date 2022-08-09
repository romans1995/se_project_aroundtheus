class Popup {
    constructor(PopupSelector) {
        this._PopupSelector = PopupSelector;
    }
    open() {
        this._PopupSelector.classList.add("popup_active");
        document.addEventListener("keydown", closePopupByEscape);
        this._PopupSelector.addEventListener("mousedown", closePopupOnRemoteClick);
    };
    close() {
        this._PopupSelector.classList.remove("popup_active");
        document.removeEventListener("keydown", closePopupByEscape);
        this._PopupSelector.removeEventListener("mousedown", closePopupOnRemoteClick);
    };
    _handleEscClose(event) {
        if (event.key === "Escape") {
            // search for an opened popup
            const openedPopup = document.querySelector(".popup_active");
            // close it
            close(openedPopup);
        }
    }

}