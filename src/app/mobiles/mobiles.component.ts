import { Component, OnInit } from "@angular/core";

import { MobileService } from "./mobile.service";
import { Mobile } from "./mobile.model";

@Component({
  selector: "app-mobiles",
  templateUrl: "./mobiles.component.html",
  styleUrls: ["./mobiles.component.css"]
})
export class MobilesComponent implements OnInit {
  allMobileData: Mobile[];
  constructor(private ms: MobileService) {}

  ngOnInit() {
    this.ms.getAllMobiles().subscribe(data => {
      this.allMobileData = data;
    });
    console.log("Loading brands");
    this.ms.loadBrands();
    // this.ms._getMobiles().subscribe(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });
  }
}
