import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { MobileService } from "./../mobiles/mobile.service";
import { LoginService } from "../auth/login/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  compareStack = [];
  private c_subscription: Subscription;
  private u_subscription: Subscription;

  constructor(private ms: MobileService, private ls: LoginService) {}

  ngOnInit() {
    this.compareStack = this.ms.compareStack;
    this.c_subscription = this.ms.compareStackUpdated.subscribe(list => {
      //console.log(list);
      this.compareStack = list;
      // this.ls.user;
    });
    //console.log(this.compareStack);
    this.u_subscription = this.ls.user.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }
  ngOnDestroy() {
    this.c_subscription.unsubscribe();
    this.u_subscription.unsubscribe();
  }
  onLogout() {
    this.ls.logout();
  }
}
