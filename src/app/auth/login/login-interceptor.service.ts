import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams
} from "@angular/common/http";
import { take, exhaustMap } from "rxjs/operators";

import { LoginService } from "./login.service";

@Injectable()
export class LoginInterceptorService implements HttpInterceptor {
  constructor(private ls: LoginService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("interceptor", req.url);
    return this.ls.user.pipe(
      take(1),
      exhaustMap(user => {
        console.log(user);
        if (!user) {
          return next.handle(req);
        }
        const modReq = req.clone({
          params: new HttpParams().set("auth", user.token)
        });
        return next.handle(modReq);
      })
    );
  }
}
