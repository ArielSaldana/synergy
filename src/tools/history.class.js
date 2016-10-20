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
        else 
            return historyInstance;

        this.currentState = history.state;
        this.pathReg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;

        this.base = ''
        this.basePath = '';
        this.url = null;
        this.path = null;
        this.data = null;

        this.setBase();

        return historyInstance;
    }

    setBase()  {
        var bases = document.getElementsByTagName('base');
        if (bases.length > 0) {
            this.base = bases[0].href;
            this.setBasePath(this.base);
        }
    }

    getBase() {
        return this.base;
    }

    setBasePath(base) {
        if (base) {
            this.basePath = base.replace(window.location.origin, '');
            console.log(this.basePath);
        }
    }

    getBasePath() {
        return this.basePath;
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