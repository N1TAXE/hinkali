import {makeAutoObservable} from "mobx";

export default class GlobalStore {
    constructor() {
        this._city = null
        this._institut = null
        makeAutoObservable(this)
    }

    setCity(id) {
        this._city = id
    }

    setInstitut(id) {
        this._institut = id
    }

    get getCity() {
        return this._city
    }

    get getInstitut() {
        return this._institut
    }
}