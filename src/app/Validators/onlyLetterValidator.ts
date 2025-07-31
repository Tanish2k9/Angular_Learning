import { AbstractControl, ValidationErrors } from "@angular/forms";

export function onlyLetterValidator(control:AbstractControl):ValidationErrors | null {

    const value = control.value;


    if(!value){
        return null;
    }


    const isValid = /^[A-Za-z\s]+$/.test(value);



    return isValid?null:{onlyLetter:true};
}