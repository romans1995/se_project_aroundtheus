class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

   getInitalCards(){
     return  fetch(`${this._baseUrl}/cards`,{
        headers:this._headers
     })
     .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
     .catch(console.log); 
 }
}  
 export const api = new Api({
    baseUrl:"https://around.nomoreparties.co/v1/cohort-3-en", 
  headers: {
    authorization: "bc512917-6cb4-408b-9fef-08d285de7af3",
    "Content-Type":"application/json"
  }
});
