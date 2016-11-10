/**
 * @class    Synergy
 * @author   Ariel Saldana / http://ariel.io
 */
var Synergy = {};

Synergy.enableMouse = function(){
    Synergy.mouse = new Mouse();
}

Synergy.enableKeyboard = function(){
    Synergy.keyboard = new Keyboard();
}

Synergy.enableViewport = function(){
    Synergy.viewport = new Viewport();
}

Synergy.enableTicker = function(){
    Synergy.ticker = new Ticker();
}


Synergy.enableTools = function() {
    Synergy.viewport = new Viewport();
    Synergy.keyboard = new Keyboard();
    Synergy.mouse = new Mouse();
    Synergy.ticker = new Ticker();
}

var S = Synergy;