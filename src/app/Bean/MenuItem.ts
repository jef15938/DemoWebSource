export class MenuItem {

    private _name: string;
    private _url: string;

    constructor(name, url) {
        this._name = name;
        this._url = url;
    }


    get name() {
        return this._name;
    }

    get url() {
        return this._url;
    }

    clone() {
        return new MenuItem(this._name, this._url);
    }
}