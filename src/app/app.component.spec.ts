import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AngularFirestore } from "@angular/fire/firestore";

describe("AppComponent", () => {
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: AngularFirestore, useValue: AngularFirestoreStub }
      ],

      declarations: [AppComponent, HeaderComponent]
    }).compileComponents();
  }));
  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    return { fixture, component };
  }

  it("should create the app", () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it("should call ngOnInit", () => {
    const { component } = setup();
    component.ngOnInit();
  });

  it(`should have as title 'compare-mobiles'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("compare-mobiles");
  });

  // it("should render title in a h1 tag", () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector("h1").textContent).toContain(
  //     "Welcome to compare-mobiles!"
  //   );
  // });
});
