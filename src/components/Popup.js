 export class Popup {
     constructor(PopupSelector) {
         this._popupElement = document.querySelector(PopupSelector);
         const closeBtn = this._popupElement.querySelector(".popup__close-btn");

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
         this._popupElement.addEventListener("mousedown", this.closePopupOnRemoteClick);
     };
     close() {
         this._popupElement.classList.remove("popup_active");
         document.removeEventListener("keydown", this._handleEscClose);
         this._popupElement.removeEventListener("mousedown", this.closePopupOnRemoteClick);
     };

     setEventListener() {
         // console.log(this._popupElement);
         this._popupElement.addEventListener('click', (e) => {
             if (
                 e.target.classList.contains('popup__close-btn') ||
                 e.target.closest('popup__container')
             ) {
                 this.close();
             } else { console.log('error') }
         });
     }
 }