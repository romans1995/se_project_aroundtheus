class Card {
    constructor(data, cardSelector, { handleClickCard, handleDeleteCard, handleLike, userId, }) {
        this._element = data;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes?data.likes:[];
        this._cardSelector = cardSelector;
        this._handleClickCard = handleClickCard;
        this._handleDeleteCard = handleDeleteCard;
        this._cardId = data._id;
        this._userId = userId;
        this._ownerId = data.owner?data.owner:data;
        this._handleLike = handleLike;
       


    }
    _getTemplate() {

        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);
        return cardElement;
    }
    _seteventListeners() {

        this._elementImage.addEventListener("click", () => { this._handleClickCard(this._link, this._name) });
        this._likeBtn.addEventListener("click", (evt) => { this._handleLike(this._cardId) });
        this._deleteBtn.addEventListener("click", () => { this._handleDeleteCard(this._cardId) });
    }
    likeCards(newLikes) {
        this._likes = newLikes;
        this._element.querySelector('.element__like-button').classList.toggle("element__like-button_active");
        this._element.querySelector(".element__likes-count").textContent = this._likes.length;
    }




    handleElmentRemove() {
        this._element.remove();
        this._element = null;
    }
    isLiked() {
        return this._likes.some((like) =>
            like._id === this._userId)
    }

    addElment() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector(".element__image");
        this._likeBtn = this._element.querySelector(".element__like-button");
        this._deleteBtn = this._element.querySelector(".element__delete-button");
        this._title = this._element.querySelector(".element__title").textContent = this._name;
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;

        this._likeCount = this._element.querySelector(".element__likes-count");
        this._likeCount.textContent = this._likes ? this._likes.length : 0;
        if (this._ownerId._id !== this._userId) {
            this._deleteBtn.style.display = "none";
        }
        if (this.isLiked()) {
            this.likeCards(this._likes);
        }
        this._seteventListeners();
        return this._element;
    }
}
export default Card;