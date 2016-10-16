/**
 * @class    ajax.class.js
 * @author   Ariel Saldana / http://ariel.io
 * TODO:     Add support to add options to he ajax request. (Headers)
 */
let historyInstance = null;

class History extends EventEmitter{

    constructor() {

        super();

        if (!historyInstance)
            historyInstance = this;

        this.currentState = history.state;
        this.pathReg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
        
        this.url = null;
        this.path = null;
        this.data = null;

        return historyInstance;
    }

    getPath() {
        if (window.location.pathname) {
            this.path = window.location.pathname;
        }

        else {
            this.path = this.pathReg.exec( window.location.href )[1];
        }

        return this.path;
    }

    goBack(amount) {
        if (amount === null || amount === undefined) {
            this.goback(1);
        } else {
            window.history.go(-1 * amount);
            this.emitEvent();
        }
    }

    goForward(amount) {
        if (amount === null || amount === undefined) {
            this.goForward(1);
        } else {
            this.currentState = history.state;
            window.history.go(amount);
            this.emitEvent();
        }
    }

    changeUrl(url, title, data) {
        document.title = title;
        window.history.pushState(null, title, url);
        this.url = url;
        this.data = data;
        this.emitEvent();
    }

    emitEvent() {
        this.currentState = history.state;
        this.trigger('change', [this.url, this.data]);
    }

}