import { Mobile } from "./mobile.model";
import { Subject, forkJoin } from "rxjs";
import { map, take, exhaustMap } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../auth/login/login.service";
const fireBaseUrl = "https://ng-compare-mobiles.firebaseio.com/";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({ providedIn: "root" })
export class MobileService {
  compareStack = [];
  brands = [];
  brandsUpdated = new Subject<any>();
  compareStackUpdated = new Subject<any>();

  constructor(
    private http: HttpClient,
    private ls: LoginService,
    private firestore: AngularFirestore
  ) {}

  getAllMobiles() {
    return this.ls.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get(fireBaseUrl + "mobiles.json");
      }),
      map(rdata => {
        console.log(rdata);
        const finalArray = [];
        for (const key in rdata) {
          finalArray.push({ ...rdata[key], id: key });
        }
        return finalArray;
      })
    );
  }
  _getMobiles() {
    return this.firestore.collection("mobiles").get();
  }
  loadBrands() {
    this.ls.user
      .pipe(
        take(1),
        exhaustMap(user => {
          return this.http.get(fireBaseUrl + "mobile-brands.json");
        }),
        map(rdata => {
          console.log(rdata);
          const finalArray = [];
          for (const key in rdata) {
            finalArray.push({ ...rdata[key], id: key });
          }
          return finalArray;
        })
      )
      .subscribe(data => {
        this.brands = data;
        console.log("all brands");
        console.log(data);
        this.brandsUpdated.next(data);
      });
  }
  getMobile(id: string) {
    return this.http.get(fireBaseUrl + "mobiles/" + id + ".json");
  }
  getBrand(id: string) {
    return this.brands.filter(each => {
      return each.id == id;
    });
  }
  updateMobile(id: string, newData) {
    return this.http.put(fireBaseUrl + "mobiles/" + id + ".json", newData);
  }
  addtoCompareStack(index: number) {
    console.log(index);
    if (this.compareStack.length < 4) {
      this.compareStack.push(index);
      console.log(this.compareStack);
      this.compareStackUpdated.next(this.compareStack);
    }
  }
  removeFromCompare(item: string) {
    const cs = this.compareStack;
    console.log(item);
    this.compareStack = cs.filter(function(ele) {
      return ele != item;
    });
    this.compareStackUpdated.next(this.compareStack);
  }
  getMobiles(ids: string[]) {
    //    console.log(ids);
    let fetchArray = ids.map(each => {
      return this.http.get(fireBaseUrl + "mobiles/" + each + ".json");
    });
    // console.log(fetchArray);
    return forkJoin(fetchArray);
  }
  getFeatures() {
    return [
      { name: "General" },
      { name: "Brand", key: "brand" },
      { name: "Sim Type", key: "sim_type" },
      { name: "Release Date", key: "release_date" },
      { name: "Design" },
      { name: "Dimensions", key: "dimensions" },
      { name: "Weight", key: "weight" },
      { name: "Memory" },
      { name: "RAM", key: "ram" },
      { name: "External", key: "external" },
      { name: "Display" },
      { name: "Resolution", key: "resolution" },
      { name: "Display Type", key: "display_type" },
      { name: "Camera" },
      { name: "Rear Camera", key: "rear_camera" },
      { name: "Front Camera", key: "front_camera" },
      { name: "Technical" },
      { name: "OS", key: "os" },
      { name: "Chipset", key: "chipset" },
      { name: "CPU", key: "cpu" },
      { name: "GPS", key: "gps" },
      { name: "Sensors", key: "sensors" }
    ];
  }
}
