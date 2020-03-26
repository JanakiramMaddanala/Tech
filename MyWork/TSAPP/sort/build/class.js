"use strict";
var Idea = /** @class */ (function () {
    function Idea() {
        this.name = 'Ram';
    }
    Idea.prototype.submit = function () {
        console.log('Submit Idea');
    };
    return Idea;
}());
console.log(new Idea());
