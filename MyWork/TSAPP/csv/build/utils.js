"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var _a = dateString.split('/').map(function (item) { return parseInt(item); }), year = _a[0], month = _a[1], date = _a[2];
    return new Date(year, month, date);
};
