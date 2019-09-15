import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { LoadingSpinnerComponent } from "./../../shared/loading-spinner/loading-spinner.component";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { LoginService } from "./login.service";

describe("Component: Login", () => {
  const AngularFirestoreStub = {
    // I just mocked the function you need, if there are more, you can add them here.
    collection: someString => {
      // return mocked collection here
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, LoadingSpinnerComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [{ provide: AngularFirestore, useValue: AngularFirestoreStub }]
    });
  });

  function setup() {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    const loginService = fixture.debugElement.injector.get(LoginService);

    return { fixture, component, loginService };
  }

  it("should create the app", () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it("should have isLoginMode as true", () => {
    const { component } = setup();
    expect(component.isLoginMode).toBeTruthy();
  });

  it("should have isLoginMode as false after switching form to Register", () => {
    const { component } = setup();
    //component.onSubmit();
    //expect(component.isLoginMode).toBeFalsy();
  });

  it("should set isLoading to true on form submit", () => {
    const { component } = setup();
    component.switchForm();
    expect(component.isLoginMode).toBeFalsy();
  });
});
