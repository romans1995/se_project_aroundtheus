export class UserInfo {
    constructor(userName, userJob) {
        this._userName = document.querySelector(userName);
        this.userJob = document.querySelector(userJob);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            title: this._userJob.textContent,
        };
    }
    setUserInfo(name, job) {
        this.userName.textContent = name;
        this.userJob.textContent = job;
    }
}