import { TestBed } from "@angular/core/testing";
import { MobilesComponent } from "./mobiles.component";
import { MobileComponent } from "./mobile/mobile.component";
import { ShortNamePipe } from "src/app/brands.pipe";

import { AngularFirestore } from "@angular/fire/firestore";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MobileService } from "./mobile.service";
import { Observable, Observer } from "rxjs";

describe("Component: Mobiles", () => {
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilesComponent, MobileComponent, ShortNamePipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: AngularFirestore, useValue: AngularFirestoreStub }]
    });
  });

  function setup() {
    const fixture = TestBed.createComponent(MobilesComponent);
    const component = fixture.componentInstance;
    const mobileService = fixture.debugElement.injector.get(MobileService);

    return { fixture, component, mobileService };
  }

  it("should create the app", () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
  it("should call ngOnInit", () => {
    const { component, fixture } = setup();
    component.ngOnInit();
  });
  it("should load all mobiles data", () => {
    const { fixture, component, mobileService } = setup();
    const mockMobileData = [
      { mobilename: "Samsung Galaxy Note 10 Plus", brand: "Samsung" },
      { mobilename: "iPhone 11", brand: "Apple" },
      { mobilename: "One Plus", brand: "One Plus" }
    ];
    spyOn(mobileService, "getAllMobiles").and.returnValue(
      Observable.create((observer: Observer<Array<{ mobilename: string }>>) => {
        observer.next(mockMobileData);
        return observer;
      })
    );
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.allMobileData.length).toBe(3);
  });
});
