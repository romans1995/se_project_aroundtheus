import {previewImage} from "./utils.js"
class Card {
    constructor(data, cardSelector) {
        this._element = data;
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
       
    }
    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);
        return cardElement;
    }
    _seteventListeners() {
        this._element.addEventListener("click", (evt) => {
            if (evt.target === this._elementImage) {
                previewImage(this._link, this._name);
            }
          });
          this._likeBtn.addEventListener("click", (evt)=>{this._toggleLike(evt)});
          this._deleteBtn.addEventListener("click", (evt)=>{this._handleElmentRemove(evt)});
    }

        _toggleLike (evt) {
       evt.target.classList.toggle("element__like-button_active");
    }
    
    _handleElmentRemove() {
        this._element.remove();
    }
   
        addElment(){
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector(".element__image");
        this._likeBtn = this._element.querySelector(".element__like-button");
        this._deleteBtn = this._element.querySelector(".element__delete-button");
        this._title = this._element.querySelector(".element__title").textContent = this._name;
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;
        this._seteventListeners();
        return this._element;
        }
}
export default Card;