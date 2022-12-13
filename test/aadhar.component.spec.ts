import { async, ComponentFixture, TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ReactiveFormsModule, AbstractControl } from '@angular/forms';


import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { AadharCardComponent } from '../app/aadhar-card/aadhar-card.component';
import { AadharCardService } from '../app/aadhar-card/aadhar-card.service'

class LoginServiceStub {

    login() { }
}

describe('AadharCardComponent', () => {
    let component: AadharCardComponent;
    let fixture: ComponentFixture<AadharCardComponent>;
    let loginService: AadharCardService;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, ReactiveFormsModule],
        declarations: [AadharCardComponent],
        providers: [{ provide: AadharCardService, useClass: LoginServiceStub }]
      })
        .compileComponents();
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(AadharCardComponent);
        component = fixture.componentInstance;
        loginService = TestBed.get(AadharCardService);
        fixture.detectChanges();
        jasmine.MAX_PRETTY_PRINT_DEPTH = 2;
      });

      it('TSC - LoginComponent: Component should be created', () => {
        expect(component).toBeTruthy();
      });  

      
      describe('Testing the getAadharForm', () => {

        beforeEach(() => {
          component.ngOnInit();
        })
    
        it("TSC - Testing whether getAadharForm is defined", () => {
          expect(component.getAadharForm).toBeDefined();
        })

        //////////////////testing field 1: username ////////////////////

        describe('aadharNumber field which is empty', () => { 
            let errors;
            let username: AbstractControl;
            let usernameSpan;
            beforeEach(() => {
              username = component.getAadharForm.controls['aadharNumber'];
              username.setValue('');
              username.markAsDirty();
              errors = username.errors;
              fixture.detectChanges();
              usernameSpan = fixture.debugElement.query(By.css('#aadharNumberError'));
            });
      
            it('TSC - aadharNumber should be invalid if it is empty', () => {
              expect(username.valid).toBeFalsy();
            });
      
            it('TSC - aadharNumber should contain required error if it is empty', () => {
              expect(errors['required']).toBeTruthy();
      
            });
      
            it('TSC - aadharNumber should display the error message if it is empty', () => {
              expect(usernameSpan).toBeTruthy();
            })
          });
          describe('aadharNumber field which is 12341234123', () => { 
            let errors;
            let username: AbstractControl;
            let usernameSpan;
            beforeEach(() => {
              username = component.getAadharForm.controls['aadharNumber'];
              username.setValue('12341234123');
              username.markAsDirty();
              errors = username.errors;
              fixture.detectChanges();
              usernameSpan = fixture.debugElement.query(By.css('#aadharNumberError'));
            });
      
            it('TSC - aadharNumber should be invalid if it is 12341234123', () => {
              expect(username.valid).toBeFalsy();
            });
      
            it('TSC - aadharNumber should contain error if it is 12341234123', () => {
              expect(errors).toBeTruthy();
      
            });
      
            it('TSC - aadharNumber should display the error message if it is 12341234123', () => {
              expect(usernameSpan).toBeTruthy();
            })
          });

          describe('aadharNumber field which is filled with a valid value', () => {
            let errors;
            let username;
            let usernameSpan;
            beforeEach(() => {
                username = component.getAadharForm.controls['aadharNumber'];
                username.setValue("123412341234");
                
              errors = username.errors;
              fixture.detectChanges();
              usernameSpan = fixture.debugElement.query(By.css('#aadharNumberError'));
            });
      
            it('TSC - aadharNumber should be valid for 123412341234', () => {
              expect(username.valid).toBeTruthy();
            });
      
            it('TSC - aadharNumber should not contain error for 123412341234', () => {
              expect(errors).toBeFalsy();
      
            });
            it('TSC - aadharNumber should not display the error message for 123412341234', () => {
              expect(usernameSpan).toBeFalsy();
            })

          });


          //update form ////
          describe('Testing the updatePhoneNumberForm', () => {

            beforeEach(() => {
              component.ngOnInit();
            })
        
            it("TSC - Testing whether updatePhoneNumberForm is defined", () => {
              expect(component.updatePhoneNumberForm).toBeDefined();
            })
    
            //////////////////testing field 1: username ////////////////////
    
            describe('phoneNumber field which is empty', () => { 
                let errors;
                let username: AbstractControl;
                let usernameSpan;
                beforeEach(() => {
                  username = component.updatePhoneNumberForm.controls['phoneNumber'];
                  username.setValue('');
                  username.markAsDirty();
                  errors = username.errors;
                  fixture.detectChanges();
                  usernameSpan = fixture.debugElement.query(By.css('#phoneNumberError'));
                });
          
                it('TSC - phoneNumber should be invalid if it is empty', () => {
                  expect(username.valid).toBeFalsy();
                });
          
                it('TSC - phoneNumber should contain required error if it is empty', () => {
                  expect(errors['required']).toBeTruthy();
          
                });
          
                it('TSC - phoneNumber should display the error message if it is empty', () => {
                  expect(usernameSpan).toBeTruthy();
                })
              });
              describe('phoneNumber field which is 9999999999', () => { 
                let errors;
                let username: AbstractControl;
                let usernameSpan;
                beforeEach(() => {
                  username = component.updatePhoneNumberForm.controls['phoneNumber'];
                  username.setValue('9999999999');
                  username.markAsDirty();
                  errors = username.errors;
                  fixture.detectChanges();
                  usernameSpan = fixture.debugElement.query(By.css('#phoneNumberError'));
                });
          
                it('TSC - phoneNumber should be invalid if it is 9999999999', () => {
                  expect(username.valid).toBeFalsy();
                });
          
                it('TSC - phoneNumber should contain error if it is 9999999999', () => {
                  expect(errors).toBeTruthy();
          
                });
          
                it('TSC - phoneNumber should display the error message if it is 9999999999', () => {
                  expect(usernameSpan).toBeTruthy();
                })
              });
    
              describe('phoneNumber field which is filled with a valid value', () => {
                let errors;
                let username;
                let usernameSpan;
                beforeEach(() => {
                    username = component.updatePhoneNumberForm.controls['phoneNumber'];
                    username.setValue("9876543210");
                    
                  errors = username.errors;
                  fixture.detectChanges();
                  usernameSpan = fixture.debugElement.query(By.css('#aadharNumberError'));
                });
          
                it('TSC - phoneNumber should be valid for 9876543210', () => {
                  expect(username.valid).toBeTruthy();
                });
          
                it('TSC - phoneNumber should not contain error for 9876543210', () => {
                  expect(errors).toBeFalsy();
          
                });
                it('TSC - phoneNumber should not display the error message for 9876543210', () => {
                  expect(usernameSpan).toBeFalsy();
                })
    
              });



          

          //////////////////////////Check Button//////////////////

      describe('getAadharForm when all fields are invalid', () => {

        let submitBtn;

        beforeEach(() => {
          component.getAadharForm.controls['aadharNumber'].setValue('');
                  
          fixture.detectChanges();
          submitBtn = fixture.debugElement.query(By.css('button')).nativeElement;
        });

        it('TSC - get aadhar form should should be invalid if aadharNumber is empty', () => {
          expect(component.getAadharForm.invalid).toBe(true);
        });

        it('TSC - should have submit button disabled', () => {
          expect(submitBtn.disabled).toBe(true);
        });

      });

          })
        })
})
