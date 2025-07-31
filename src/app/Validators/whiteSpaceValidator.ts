import { AbstractControl, ValidationErrors } from "@angular/forms";

export function whiteSpaceValidator(control:AbstractControl):ValidationErrors | null {

    const value = control.value;
    if(!value){
        return null;
    }
    const data = value.trim();
    const isValid = data === value;
    return isValid?null:{whiteSpace:true};
}