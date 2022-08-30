 export class Popup {
     constructor(PopupSelector) {
         this._popupElement = document.querySelector(PopupSelector);
         this.close = this.close.bind(this);
     }

     _handleEscClose = (e) => {
         if (e.key === "Escape") {
             this.close();
         }
     }

     open() {
         this._popupElement.classList.add("popup_active");
         document.addEventListener("keydown", this._handleEscClose);
         document.addEventListener("mousedown", this._closePopupOnRemoteClick);
     };
     close() {
         this._popupElement.classList.remove("popup_active");
         document.removeEventListener("keydown", this._handleEscClose);
         document.removeEventListener("mousedown", this._closePopupOnRemoteClick);
     };

     _closePopupOnRemoteClick = (e) => {
         if (e.target.classList.contains("popup")) {
             this.close();
         }
     }

     setEventListener() {
         this._popupElement.addEventListener('click', (e) => {
             if (
                 e.target.classList.contains('popup__close-btn')
             ) {
                 this.close();
             }
         });
     }
 }