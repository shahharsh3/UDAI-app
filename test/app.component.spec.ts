import { AppComponent } from '../app/app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

describe('AppComponent', () =>
{
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let link: DebugElement;
    let routerOutletTag: DebugElement;
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule(
            {
                imports: [RouterTestingModule],
                declarations: [AppComponent]
            })
            .compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        link = fixture.debugElement.query(By.css('nav > ul > li > a'));
        routerOutletTag = fixture.debugElement.query(By.css('router-outlet'));

    });

    it('TAC - AppComponent should be created', () =>
    {   
        expect(component).toBeTruthy();
    });

    it('TAC - Testing routerLink', () =>
    { 
        expect(link.attributes['ng-reflect-router-link']).toMatch('[\/]?update');
    })

    it('TAC - Testing router outlet', () =>
    {
        expect(routerOutletTag).toBeTruthy();
    })
});