import { Component, ComponentFactoryResolver } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { LoginService, authResponseData } from "./login.service";
import { AlertComponent } from "src/app/shared/alert/alert.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private ls: LoginService,
    private route: Router,
    private cfr: ComponentFactoryResolver
  ) {}

  switchForm() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const { email, password } = form.value;

    let authObs: Observable<authResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.ls.logIn(email, password);
    } else {
      authObs = this.ls.signUp(email, password);
    }

    authObs.subscribe(
      res => {
        console.log(res);
        this.isLoading = false;
        this.route.navigate(["/mobiles"]);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }
  onHandleError() {
    this.error = null;
  }
  private showErrorAlert(message: string) {
    //const
    const alertComFac = this.cfr.resolveComponentFactory(AlertComponent);
  }
}
