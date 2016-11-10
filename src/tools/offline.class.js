/**
 * @class    offline.class.js
 * @author   Ariel Saldana / http://ariel.io
 */
let offlineInstance = null;

class Offline extends EventEmitter {

    constructor(options) {
        super(options);

        // super(options);

        if (!offlineInstance)
            offlineInstance = this;

        this.options = {
            classes: {
                active: true,
                target: document.body,
                offline: 'offline',
                online: 'online'
            }
        };

        this.status = null;
        this.listen_to_events();

        return offlineInstance;
    }

    /**
     * Listen to events
     * @return {object} Context
     */
    listen_to_events() {

        var change = () => {
            // Online
            if (navigator.onLine) {
                if (this.options.classes.active) {
                    this.options.classes.target.classList.remove(this.options.classes.offline);
                    this.options.classes.target.classList.add(this.options.classes.online);
                }

                // update status
                this.status = 'online';

                // Trigger bang bang
                this.trigger('online');
                this.trigger('change', [this.status]);
            }

            // Offline
            else {
                if (this.options.classes.active) {
                    this.options.classes.target.classList.remove(this.options.classes.online);
                    this.options.classes.target.classList.add(this.options.classes.offline);
                }

                // update status
                this.status = 'offline';

                // trigger
                this.trigger('offline');
                this.trigger('change', [this.status]);
            }

        }

        if (window.addEventListener) {
            window.addEventListener('online', change, false);
            window.addEventListener('offline', change, false);
        }

        else {
            document.body.ononline = change;
            document.body.offline = change;
        }

        change();

        return this;

    }
}