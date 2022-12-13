import { PhoneNumberValidator } from "../app/aadhar-card/phone-number.validator";
import { FormControl } from '@angular/forms';

describe("PhoneNumberValidator", ()=>{

    it("TCV - PhoneNumberValidator noRepeat method check for valid value: 9876543210", ()=>{
        let control: FormControl = new FormControl();
        control.setValue("9876543210");
        expect(PhoneNumberValidator.noRepeat(control)).toBe(null);
    })

    it("TCV - PhoneNumberValidator noRepeat method check for valid value: 9999999990", ()=>{
        let control: FormControl = new FormControl();
        control.setValue("9999999990");
        expect(PhoneNumberValidator.noRepeat(control)).toEqual(null);
    })

    it("TCV - PhoneValidator noRepeat method check for invalid value: 9999999999", ()=>{
        let control: FormControl = new FormControl();
        control.setValue("9999999999");
        expect(PhoneNumberValidator.noRepeat(control)).toEqual({noRepeat: true});
    })
})