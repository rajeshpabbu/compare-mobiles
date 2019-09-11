import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { MobileService } from "../mobile.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-moble-edit",
  templateUrl: "./moble-edit.component.html",
  styleUrls: ["./moble-edit.component.css"]
})
export class MobleEditComponent implements OnInit, OnDestroy {
  brands = [];
  createForm: FormGroup;
  brandSub: Subscription;

  constructor(private ms: MobileService, private http: HttpClient) {}
  ngOnInit() {
    this.createForm = new FormGroup({
      mobilename: new FormControl(null, Validators.required),
      brand: new FormControl(null),
      release_date: new FormControl(null),
      sim_type: new FormControl(null),
      os: new FormControl(null),
      chipset: new FormControl(null),
      cpu: new FormControl(null),
      gps: new FormControl(null),
      sensors: new FormControl(null),
      dimensions: new FormControl(null),
      weight: new FormControl(null),
      resolution: new FormControl(null),
      display_type: new FormControl(null),
      ram: new FormControl(null),
      external: new FormControl(null),
      rear_camera: new FormControl(null),
      front_camera: new FormControl(null)
    });

    this.brandSub = this.ms.brandsUpdated.subscribe(data => {
      this.brands = data;
    });
  }

  onSubmit() {
    console.log(this.createForm);
  }
  ngOnDestroy() {
    this.brandSub.unsubscribe();
  }
}
