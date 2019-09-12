import { TestBed } from "@angular/core/testing";
import { CompareMobilesComponent } from "./compare-mobiles.component";
import { BrandsPipe } from "src/app/brands.pipe";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AngularFirestore } from "@angular/fire/firestore";

describe("Component: Compare Mobiles", () => {
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareMobilesComponent, BrandsPipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: AngularFirestore, useValue: AngularFirestoreStub }]
    });
  });

  it("should create the app", () => {
    let fixture = TestBed.createComponent(CompareMobilesComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
