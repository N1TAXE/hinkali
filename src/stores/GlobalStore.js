import {makeAutoObservable} from "mobx";

export default class GlobalStore {
    constructor() {
        this._city = null
        this._institut = null
        this._isauth = null
        makeAutoObservable(this)
    }

    setCity(id) {
        this._city = id
    }

    setInstitut(id) {
        this._institut = id
    }

    setIsAuth(bool) {
        this._isauth = bool
    }

    get getCity() {
        return this._city
    }

    get getInstitut() {
        return this._institut
    }

    get getIsAuth() {
        return this._isauth
    }
}