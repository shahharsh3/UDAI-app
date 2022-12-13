import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';

import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AadharCardService } from '../app/aadhar-card/aadhar-card.service';

describe('AadharCardService', () =>
{
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule
        ({
            imports: [HttpClientModule],
            providers: [AadharCardService]
        }).compileComponents();
    }));

    it('TS - Testing instantiation of service using dependency injection', inject([AadharCardService], (service : AadharCardService) =>
    {
        expect(service instanceof AadharCardService).toBe(true);
    }));

    

    describe('Invoking getAadhar function', () =>
    {
        let http : HttpClient;
        let fakeSuccessResponseObject;
        let inputData;
        let service : AadharCardService;

        beforeEach(() =>
        {
            http = TestBed.get(HttpClient);
            service = TestBed.get(AadharCardService);
            inputData =
            {
                aadharNumber : "123412341234"
            };

            fakeSuccessResponseObject =
            {
                aadharNumber : "123412341234",
                mobileNumber:"9876543210",
                name:"name",
                address:"Mysore"
            };
        });

        it('TS - getAadhar : Is the POST method called?', () =>
        {
            let spy = spyOn(http, "post").and.returnValue(of(fakeSuccessResponseObject));
            service.getAadhar(inputData);
            expect(spy).toHaveBeenCalled();
        });

        it('TS - getAadhar: Is the POST method URL correct?', () =>
        {
            let urlCalled;
            let spy = spyOn(http, "post").and.callFake((url, data) =>
            {
                urlCalled = url;
                return of(null);
            })
            service.getAadhar(inputData);
            expect(urlCalled).toMatch("http://localhost:8765/AadharAPI/getAadhar");
        });

        it('TS - getAadhar: Is the POST method called with correct data?', () =>
        {
            let dataPassed;
            let spy = spyOn(http, "post").and.callFake((url, data) =>
            {
                dataPassed = data;
                return of(null);
            })
            service.getAadhar(inputData);
            expect(dataPassed).toEqual(inputData);
        });
    });
    describe('Invoking updatePhoneNumber function', () =>
    {
        let http : HttpClient;
        let fakeSuccessResponseObject;
        let inputData;
        let service : AadharCardService;

        beforeEach(() =>
        {
            http = TestBed.get(HttpClient);
            service = TestBed.get(AadharCardService);
            inputData =
            {
                aadharNumber : "123412341234",
                mobileNumber:"9876543210",
                name:"name",
                address:"Mysore"
            };

            fakeSuccessResponseObject =
            {
                aadharNumber : "123412341234",
                mobileNumber:"9876543210",
                name:"name",
                address:"Mysore",
                message:"Suucessfully Updated"
            };
        });

        it('TS - updatePhoneNumber : Is the POST method called?', () =>
        {
            let spy = spyOn(http, "post").and.returnValue(of(fakeSuccessResponseObject));
            service.updatePhoneNumber(inputData);
            expect(spy).toHaveBeenCalled();
        });

        it('TS - updatePhoneNumber: Is the POST method URL correct?', () =>
        {
            let urlCalled;
            let spy = spyOn(http, "post").and.callFake((url, data) =>
            {
                urlCalled = url;
                return of(null);
            })
            service.updatePhoneNumber(inputData);
            expect(urlCalled).toMatch("http://localhost:8765/AadharAPI/updatePhoneNumber");
        });

        it('TS - updatePhoneNumber: Is the POST method called with correct data?', () =>
        {
            let dataPassed;
            let spy = spyOn(http, "post").and.callFake((url, data) =>
            {
                dataPassed = data;
                return of(null);
            })
            service.updatePhoneNumber(inputData);
            expect(dataPassed).toEqual(inputData);
        });
    });
});