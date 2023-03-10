import { ApiPath, HttpMethodEnum } from 'common';

class Auth {
    constructor({baseURL, http}) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.AUTH;
    }

    signIn(path, payload){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json',
        })
    }

    signUp(path, payload){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json',
        })
    }

    verifyRegistration(path){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json',
        })
    }

    resendEmailVerificationToken(path){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json',
        })
    }

    refreshToken(path, payload){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json',
            credentials: true,
        })
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }
}

export { Auth };