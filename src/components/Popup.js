 export class Popup {
     constructor(PopupSelector) {
         this._popupElement = document.querySelector(PopupSelector);

     }
     _handleEscClose = (event) => {
         if (event.key === "Escape") {
             // search for an opened popup
             const openedPopup = document.querySelector(".popup_active");
             // close it
             this.close(openedPopup);
         }
     }
     open() {
         this._popupElement.classList.add("popup_active");
         document.addEventListener("keydown", this._handleEscClose);
         this._popupElement.addEventListener("mousedown", closePopupOnRemoteClick);
     };
     close() {
         this._popupElement.classList.remove("popup_active");
         document.removeEventListener("keydown", this._handleEscClose);
         this._popupElement.removeEventListener("mousedown", closePopupOnRemoteClick);
     };
     closePopupOnRemoteClick() {

     }

     setEventListener() {
         this._popupElement.querySelector('.popup').addEventListener('click', (e) => {
             if (e.classList.contains('popup__close-btn') || e.closest('popup__container')) {
                 this.close()
             } else { console.log('error') }
         });
     }
 }