import {makeAutoObservable} from "mobx";

export default class GlobalStore {
    constructor() {
        this._bool = false
        this._var = {}
        makeAutoObservable(this)
    }

    setFunc(bool) {
        this._bool = bool
    }

    get getFunc() {
        return this._bool
    }
}