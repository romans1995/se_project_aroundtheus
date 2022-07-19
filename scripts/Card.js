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
            if (evt.target === this._likeBtn) {
              this._toggleClass(evt);
            }
            if (evt.target === this._deleteBtn) {
              
              evt.currentTarget.remove();
            }
            if (evt.target === this._elementImage) {
                previewImage(this._link, this._name);
            }
          });
    }
        _toggleClass (evt) {
       evt.target.classList.toggle(".element__like-button_active");
    };
    _handlerElemntElmentRemove() {}
   
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
        // const elementTitleElement = elementElement.querySelector(".element__title");
        // elementTitleElement.textContent = data.name;
        // const likeBtn = elementElement.querySelector(".element__like-button");
        // const elementImage = elementElement.querySelector(".element__image");
        // elementImage.src = data.link;
        // elementImage.alt = `picture of a ${data.name}`;
        // const deleteBtn = elementElement.querySelector(".element__delete-button");
        // //eventListeners
        // elementImage.addEventListener("click", () => previewImage(data));
        // deleteBtn.addEventListener("click", () => elementElement.remove());
        // likeBtn.addEventListener("click", () =>
        //     toggleClass(likeBtn, "element__like-button_active")
        // );
        // return elementElement;

}
export default Card;