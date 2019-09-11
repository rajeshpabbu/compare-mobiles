import { Component, OnInit, OnDestroy } from "@angular/core";

import { MobileService } from "./../mobile.service";
import { Subscription, forkJoin } from "rxjs";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-compare-mobiles",
  templateUrl: "./compare-mobiles.component.html",
  styleUrls: ["./compare-mobiles.component.css"]
})
export class CompareMobilesComponent implements OnInit, OnDestroy {
  compare_list = Array(4);

  mobile_features = [];
  queryParams;
  private c_subscription: Subscription;

  constructor(
    private ms: MobileService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.mobile_features = this.ms.getFeatures();
    this.c_subscription = this.ms.compareStackUpdated.subscribe(() => {
      //this.prepareCompareList();
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.prepareCompareList(params.ids);
    });
  }
  prepareCompareList(ids: string) {
    if (!ids) {
      this.router.navigate(["mobiles"]);
    }
    const cs = ids.split(",");
    this.ms.compareStack = cs;
    this.ms.compareStackUpdated.next(cs);
    this.ms.getMobiles(cs).subscribe(data => {
      this.compare_list = data;
      console.log(data);
      this.compare_list.length = 4;
    });
    // this.compare_list = this.ms.compareStack.map(ele => {
    //   return this.ms.getMobile(ele);
    // });
  }
  removeFromCompare(id: string) {
    this.ms.removeFromCompare(id);
  }
  ngOnDestroy() {
    this.c_subscription.unsubscribe();
  }
}
