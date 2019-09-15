/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { AngularFirestore } from "@angular/fire/firestore";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MobileService } from "../mobiles/mobile.service";
import { LoginService } from "../auth/login/login.service";
import { Observable, Observer } from "rxjs";

describe("Component: Header", () => {
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: AngularFirestore, useValue: AngularFirestoreStub }]
    });
  });

  function setup() {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    const mobileService = fixture.debugElement.injector.get(MobileService);
    const loginService = fixture.debugElement.injector.get(LoginService);

    return { fixture, component, mobileService, loginService };
  }

  it("should create the app", () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
  it("should call ngOnInit", () => {
    const { component } = setup();
    component.ngOnInit();
  });

  it("should load compare mobiles stack ngOnInit", () => {
    const { fixture, component, mobileService } = setup();

    component.ngOnInit();
    fixture.detectChanges();
    mobileService.addtoCompareStack(3);
    mobileService.addtoCompareStack(2);

    expect(component.compareStack.length).toBe(2);
  });

  it("should logoff successfully", () => {
    const { component, loginService } = setup();
    spyOn(loginService, "logout").and.returnValue(null);
    component.onLogout();

    expect(loginService.logout).toHaveBeenCalled();
  });
});
