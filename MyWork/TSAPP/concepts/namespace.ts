export namespace Validator{
    export interface DateValidator{
        inputDate: string;
    }

    export class CustomDateValidator implements DateValidator{
        inputDate: string;
    }

    export class DateConstants {
        static defaultDate: string = "1/8/2019";
    }

}

// import { CustomDateValidator} from 'Validator';

let validator: Validator.CustomDateValidator = {
    inputDate : Validator.DateConstants.defaultDate
}

console.log(validator.inputDate);
