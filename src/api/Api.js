export default class Api {
    constructor(config) {
        this._config = config;
    }

    _getResponsiveData(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }

    setToken(token) {
        this._config.headers.Authorization = `Bearer ${token}`;
    }

    getProfile(){
        return fetch(`${this._config.url}/auth/myInfo`, {
            headers: this._config.headers,
        })
          .then((res) => this._getResponsiveData(res))
    }

    getArticles(data) {
        return fetch(`${this._config.url}/article/filter`, {
            method: "POST",
            headers: this._config.headers,
            body: JSON.stringify(data),
        }).then((res) => this._getResponsiveData(res));
    }
}
