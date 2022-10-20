import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
    constructor(formSelector) {
        super(formSelector);
       
        this._form = this._popupElement.querySelector(".popup__inputs-container");
        
    }
    setAction(action) {
        this._submitHandler = action;
    }
    setEventListeners() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler();
        });
        super.setEventListener();
    }
    
}
