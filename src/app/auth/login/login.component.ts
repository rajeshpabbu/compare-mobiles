import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { LoginService, authResponseData } from "./login.service";
import { AlertComponent } from "src/app/shared/alert/alert.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private ls: LoginService,
    private route: Router,
    // private cfr: ComponentFactoryResolver,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }

  switchForm() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit() {
    this.isLoading = true;
    if (!this.form.valid) return;

    let authObs: Observable<authResponseData> = this.isLoginMode
      ? this.ls.logIn(this.form.value)
      : this.ls.signUp(this.form.value);

    authObs.subscribe(
      res => {
        this.isLoading = false;
        this.route.navigate(["/mobiles"]);
      },
      errorMessage => {
        this.error = errorMessage;
        //this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    this.form.reset();
  }
  onHandleError() {
    this.error = null;
  }
  // private showErrorAlert(message: string) {
  //   const alertComFac = this.cfr.resolveComponentFactory(AlertComponent);
  // }
}
