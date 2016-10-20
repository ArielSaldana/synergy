/**
 * @class    ajax.class.js
 * @author   Ariel Saldana / http://ariel.io
 * TODO:     Add support to add options to he ajax request. (Headers)
 */
let ajaxInstance = null;

class Ajax {

    constructor() {

        // if (!ajaxInstance)
        //     ajaxInstance = this;
        // return ajaxInstance;
    }

    test() {
        console.log('test');
    }

    getJSON(url, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(JSON.parse(xhr.responseText));
                } else {
                    error(xhr.responseText);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    }

    get(url) {
        return new Promise(
            function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        if (this.status === 200) {
                            // Success
                            // resolve(this.response);
                            resolve(JSON.parse(request.responseText));
                        } else {
                            // Something went wrong (404 etc.)
                            reject(new Error(this.statusText));
                        }
                    }
                }
                request.onerror = function () {
                    reject(new Error(
                        'XMLHttpRequest Error: ' + this.statusText));
                };
                request.open('GET', url);
                request.send();
            });
    }

}