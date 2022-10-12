export class UserInfo {
    constructor(userName, userJob, userAvatar) {
        this._userName = document.querySelector(userName);
        this._userJob = document.querySelector(userJob);
        this._userAvatr = document.querySelector(userAvatar);

    }

    getUserInfo() {

        return {
            name: this._userName.textContent,
            title: this._userJob.textContent,
        };
    }
    setUserInfo(name, job) {

        this._userName.textContent = name;
        this._userJob.textContent = job;
    }
}