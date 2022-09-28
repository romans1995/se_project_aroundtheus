import { Popup } from "./Popup.js";

 class PopupWithSubmit extends Popup {
    constructor(formSelector) {
        super(formSelector);
        this._form = this._popupElement.querySelector(".popup__inputs-container");
    }
    setAction(action){
        this._submitHandler = action;
    }
    setEventListeners() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            // this.submitHandler(data); 
            // console.log("reweq");
            this.close();
            super.setEventListeners();
        });
    
}
}
export default PopupWithSubmit;
