"use strict";
exports.__esModule = true;
var Validator;
(function (Validator) {
    var CustomDateValidator = /** @class */ (function () {
        function CustomDateValidator() {
        }
        return CustomDateValidator;
    }());
    Validator.CustomDateValidator = CustomDateValidator;
    var DateConstants = /** @class */ (function () {
        function DateConstants() {
        }
        DateConstants.defaultDate = "1/8/2019";
        return DateConstants;
    }());
    Validator.DateConstants = DateConstants;
})(Validator = exports.Validator || (exports.Validator = {}));
// import { CustomDateValidator} from 'Validator';
var validator = {
    inputDate: Validator.DateConstants.defaultDate
};
console.log(validator.inputDate);
