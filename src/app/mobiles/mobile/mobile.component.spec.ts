import { TestBed } from "@angular/core/testing";
import { MobileComponent } from "./mobile.component";
import { ShortNamePipe } from "src/app/brands.pipe";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { MobileService } from "../mobile.service";

describe("Component: Mobile", () => {
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileComponent, ShortNamePipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: AngularFirestore, useValue: AngularFirestoreStub }]
    });
  });

  function setup() {
    const fixture = TestBed.createComponent(MobileComponent);
    const component = fixture.componentInstance;
    const mobileService = fixture.debugElement.injector.get(MobileService);

    return { fixture, component, mobileService };
  }

  it("should create the app", () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
  it("should add to compare stack successfully", () => {
    const { component, mobileService } = setup();
    mobileService.compareStack = [];
    component.addToCompare(1);
    expect(mobileService.compareStack).toEqual([1]);
    component.addToCompare(2);
    expect(mobileService.compareStack.length).toBe(2);
  });
  it("should remove from compare stack successfully", () => {
    const { component, mobileService } = setup();
    mobileService.compareStack = [1, 2];
    component.removeFromCompare("1");
    expect(mobileService.compareStack).toEqual([2]);
    component.removeFromCompare("2");
    expect(mobileService.compareStack.length).toBe(0);
  });
});
