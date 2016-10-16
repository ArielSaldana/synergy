/**
 * @class    ajax.class.js
 * @author   Ariel Saldana / http://ariel.io
 * TODO:     Add support to add options to he ajax request. (Headers)
 */
let componentInstance = null;

class Component {
    
    constructor () {
        
        if (!componentInstance)
            componentInstance = this;

        // this.route_containers = document.querySelectorAll('div[syn-router-container]');
        // console.log(this.route_containers);
            
        return componentInstance;
    }
    
}