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

    
    /**
     * Set the base url : includes protocol, domain, path
     */
    setBase()  {
        var bases = document.getElementsByTagName('base');
        if (bases.length > 0) {
            this.base = bases[0].href;
            this.setBasePath(this.base);
        }
    }


    /**
     * @return {string} base path
     */
    getBase() {
        return this.base;
    }


    /**
     * Set the base path
     */
    setBasePath(base) {
        if (base) {
            this.basePath = base.replace(window.location.origin, '');
        }
    }


    /**
     * get the base path, specified in the html, <base href="/synergy">
     * @return {string} path
     */
    getBasePath() {
        return this.basePath;
    }


    /**
     * @return {string} path
     */
    getPath() {
        if (window.location.pathname) {
            this.path = window.location.pathname;
        }

        else {
            this.path = this.pathReg.exec( window.location.href )[1];
        }

        return this.path;
    }


    /**
     * Attempt to go back in history
     * @return {Object} Context
     */
    goBack(amount) {
        if (amount === null || amount === undefined) {
            this.goback(1);
        } else {
            window.history.go(-1 * amount);
            this.emitEvent();
        }

        return this;
    }
    

    /**
     * Attempt to go forward in history
     * @return {Object} Context
     */
    goForward(amount) {
        if (amount === null || amount === undefined) {
            this.goForward(1);
        } else {
            this.currentState = history.state;
            window.history.go(amount);
            this.emitEvent();
        }
    }


    /**
     * Change the Url, title
     * @return {Object} Context
     */
    changeUrl(url, title, data) {
        document.title = title;
        window.history.pushState(null, title, url);
        this.url = url;
        this.data = data;
        this.emitEvent();

        return this;
    }


    /**
     * Emite url changed event
     */
    emitEvent() {
        this.currentState = history.state;
        this.trigger('change', [this.url, this.data]);
    }

}