class Card {
    constructor(data, cardSelector, { handleClickCard, handleDeleteCard, handleLikeIcon, userId }) {
        this._element = data;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._handleClickCard = handleClickCard;
        this._handleDeleteCard = handleDeleteCard;
        this._cardId = data._id;

        this._userId = userId;
        this._ownerId = data.owner._id;
    }
    _getTemplate() {

        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);
        return cardElement;
    }
    _seteventListeners() {

        this._elementImage.addEventListener("click", () => { this._handleClickCard(this._link, this._name) });
        this._likeBtn.addEventListener("click", (evt) => { this._toggleLike(evt) });
        this._deleteBtn.addEventListener("click", () => { this._handleDeleteCard(this._cardId) });
    }

    _toggleLike(evt) {
        evt.target.classList.toggle("element__like-button_active");
    }


    // handleElmentRemove() {
    //     this._element.remove();
    //     this._element = null;
    // }

    addElment() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector(".element__image");
        this._likeBtn = this._element.querySelector(".element__like-button");
        this._deleteBtn = this._element.querySelector(".element__delete-button");
        this._likeCount = this._element.querySelector(".element__likes-count").textContent = this._likes.length;
        this._title = this._element.querySelector(".element__title").textContent = this._name;
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;
        if (this._ownerId !== this._userId) {
            this._deleteBtn.style.display = "none";
        }


        this._seteventListeners();
        return this._element;
    }
}
export default Card;