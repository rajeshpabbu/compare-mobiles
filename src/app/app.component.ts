import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginService } from "./auth/login/login.service";
import { MobileService } from "./mobiles/mobile.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "compare-mobiles";
  message: any;
  constructor(private ls: LoginService, private ms: MobileService) {}
  ngOnInit() {
    this.ls.autoLogin();
  }
}
