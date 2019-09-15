import { TestBed } from "@angular/core/testing";
import { MobleEditComponent } from "./moble-edit.component";
import { BrandsPipe } from "src/app/brands.pipe";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { ReactiveFormsModule } from "@angular/forms";
import { MobileService } from "../mobile.service";

describe("Component: Mobile Edit", () => {
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobleEditComponent, BrandsPipe],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [{ provide: AngularFirestore, useValue: AngularFirestoreStub }]
    });
  });

  function setup() {
    const fixture = TestBed.createComponent(MobleEditComponent);
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
  it("should load brands data on ngOnInit", () => {
    const { fixture, component, mobileService } = setup();

    component.ngOnInit();
    fixture.detectChanges();
    mobileService.addtoCompareStack(3);
    mobileService.addtoCompareStack(2);

    // expect(component.compareStack.length).toBe(2);
  });
});
