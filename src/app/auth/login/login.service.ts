import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { environment } from "./../../../environments/environment";

export interface authResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class LoginService {
  user = new BehaviorSubject<User>(null);
  token: string = null;
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private route: Router) {}

  signUp(data) {
    let { email, password } = data;
    return this.http
      .post<authResponseData>(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
          environment.firebaseAPIKey,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData =>
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          )
        )
      );
  }
  logIn(data) {
    let { email, password } = data;
    console.log(email, password);
    return this.http
      .post<authResponseData>(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
          environment.firebaseAPIKey,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData =>
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          )
        )
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.route.navigate(["/login"]);
    localStorage.removeItem("userData");
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationduration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationduration);
  }

  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem("userData", JSON.stringify(user));
  }

  private handleError(errorData: HttpErrorResponse) {
    let errorMsg = "An unknown error occured";
    if (!errorData.error || !errorData.error.error) {
      return throwError(errorMsg);
    }
    switch (errorData.error.error.message) {
      case "EMAIL_EXISTS":
        errorMsg = "This email already exists";
        break;
      case "EMAIL_NOT_FOUND":
      case "INVALID_PASSWORD":
        errorMsg = "This data not found on our records with given combination";
    }
    return throwError(errorMsg);
  }
}
