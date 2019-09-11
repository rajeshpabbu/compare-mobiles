import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Mobile } from "./../mobile.model";
import { MobileService } from "../mobile.service";

@Component({
  selector: "app-mobile-details",
  templateUrl: "./mobile-details.component.html",
  styleUrls: ["./mobile-details.component.css"]
})
export class MobileDetailsComponent implements OnInit {
  //id: number;
  cMobile;
  mobile_features = [];
  constructor(private route: ActivatedRoute, private ms: MobileService) {}

  ngOnInit() {
    this.mobile_features = this.ms.getFeatures();
    this.route.params.subscribe((params: Params) => {
      const id = params["id"];
      console.log(params);

      this.ms.getMobile(id).subscribe(data => {
        this.cMobile = data;
      });
    });
  }
}
