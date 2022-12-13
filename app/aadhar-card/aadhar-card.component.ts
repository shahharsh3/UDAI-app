import { Component, OnInit } from '@angular/core';
import { AadharCardService } from './aadhar-card.service';
import { AadharCard } from './aadhar-card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneNumberValidator } from './phone-number.validator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aadhar-card',
  templateUrl: './aadhar-card.component.html',
  styleUrls: ['./aadhar-card.component.css']
})
export class AadharCardComponent implements OnInit {
//errorMessage instance variable to store the message returned from the response returned from server
errorMessage: string;
//successMessage instance variable to populate successMessage
successMessage: string;
//myAadhar instance variable to store the AadharCard object returned from response
myAadhar: AadharCard;
//getAadharForm variable to group the form control aadharNumber
getAadharForm: FormGroup;
//updatePhoneNumberForm variable to group the formcontrols aadharNumber and phoneNumber
updatePhoneNumberForm: FormGroup;

//Inject AadharCardService and FormBuilder object to the constructor
 
  constructor(private fb:FormBuilder,private service:AadharCardService, private router:Router) { }

  
  ngOnInit() {
    this.getAadharForm=this.fb.group({
      aadharNumber:["",[Validators.required,Validators.minLength(12),Validators.maxLength(12)]]
    })

    this.updatePhoneNumberForm=this.fb.group({
      aadharNumber:["",[Validators.required]],
      phoneNumber:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10),PhoneNumberValidator.noRepeat]]
    })
    
  }

  getAadhar() {
    this.errorMessage=null;
    this.successMessage=null;
    this.myAadhar=null;
    this.service.getAadhar(this.getAadharForm.value)
    .subscribe(resp=>{this.myAadhar=resp;
      this.updatePhoneNumberForm.get('aadharNumber').setValue(resp.aadharNumber);
      this.updatePhoneNumberForm.controls.phoneNumber.setValue(resp.phoneNumber);
  
  },errResp=>{this.errorMessage=errResp.error.message});

  }

  updatePhoneNumber() {
    this.successMessage=null;
    this.errorMessage=null;
    this.service.updatePhoneNumber(this.updatePhoneNumberForm.value)
    .subscribe(res=>this.successMessage="Phone number updated successfully as "+res.phoneNumber,
               res=>this.errorMessage=res.error.message );
 
  }

  // phone(aadharNumber){
  //   this.router.navigate(['/phoneNo/' + aadharNumber])
  // }
}
