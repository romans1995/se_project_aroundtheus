const customFetch = (url, heasders) =>
    fetch(url, heasders)
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText));

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitalCards() {
        return customFetch(`${this._baseUrl}/cards`, {
            headers: this._headers,

        })

    }
    setUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        })
    }

    getUserInformation() {
        return customFetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,

        })
    }
    createCard(data) {
        return customFetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: "DELETE",
        });
    }
    likeCard(cardId) {
        return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: "PUT",
        })
    }
    dislikeCard(cardId) {
        return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: "DELETE",
        });
    }
    setAvatarImage(url) {
        return customFetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                avatar: url,
            })
        })
    }
}

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
    headers: {
        authorization: "bc512917-6cb4-408b-9fef-08d285de7af3",
        "Content-Type": "application/json"
    }
});