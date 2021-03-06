import { TestBed } from "@angular/core/testing";
import { MobileDetailsComponent } from "./mobile-details.component";
import { BrandsPipe } from "src/app/brands.pipe";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { MobileService } from "../mobile.service";
import { Observable, Observer } from "rxjs";

describe("Component: Mobile Details", () => {
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileDetailsComponent, BrandsPipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: AngularFirestore, useValue: AngularFirestoreStub }]
    });
  });

  function setup() {
    const fixture = TestBed.createComponent(MobileDetailsComponent);
    const component = fixture.componentInstance;
    const mobileService = fixture.debugElement.injector.get(MobileService);

    return { fixture, component, mobileService };
  }
  it("should create the app", () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it("should call ngOnInit", () => {
    const { component } = setup();
    component.ngOnInit();
  });

  it("should load a single mobile data", () => {
    const { fixture, component, mobileService } = setup();
    const mockMobile = {
      mobilename: "Samsung Galaxy Note 10 Plus",
      brand: "Samsung"
    };
    spyOn(mobileService, "getMobile").and.returnValue(
      Observable.create((observer: Observer<{ mobilename: string }>) => {
        observer.next(mockMobile);
        return observer;
      })
    );
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.cMobile).toBe(mockMobile);
  });
});
