import { AbstractControl } from "@angular/forms";

//Validator Class to validate phone number
export class PhoneNumberValidator {

 
    static noRepeat(control: AbstractControl): {'noRepeat':true} | null {
        let phoneNo:string=control.value+"";
        if(phoneNo.match("^("+phoneNo.charAt(0)+"){10}$")){
            return {'noRepeat':true};
        }
       return null;
        
        
    }
}
