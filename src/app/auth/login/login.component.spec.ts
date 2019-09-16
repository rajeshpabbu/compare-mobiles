import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { LoadingSpinnerComponent } from "./../../shared/loading-spinner/loading-spinner.component";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AngularFirestore } from "@angular/fire/firestore";
import { LoginService } from "./login.service";

describe("Component: Login", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [LoginComponent, LoadingSpinnerComponent]
    });

    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it("form invalid when empty", () => {
    expect(component.form.valid).toBeFalsy();
  });
  it("get form instances successfully", () => {
    expect(component.email).not.toBeNull();
    expect(component.password).not.toBeNull();
  });
  it("email field validity", () => {
    let errors = {};
    let email = component.form.controls["email"];
    expect(email.valid).toBeFalsy();

    errors = email.errors || {};
    expect(errors["required"]).toBeTruthy();

    email.setValue("test");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();

    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("password field validity", () => {
    let errors = {};
    let password = component.form.controls["password"];

    errors = password.errors || {};
    expect(errors["required"]).toBeTruthy();

    password.setValue("123456");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();

    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("submitting a form emits a user", () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls["email"].setValue("test@test.com");
    component.form.controls["password"].setValue("123456789");
    expect(component.form.valid).toBeTruthy();
  });
});
