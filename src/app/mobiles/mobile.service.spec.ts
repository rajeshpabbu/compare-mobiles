// import { TestBed, inject } from "@angular/core/testing";
// import { AngularFirestore } from "@angular/fire/firestore";

// import { MobileService } from "./mobile.service";
// import { HttpClientTestingModule } from "@angular/common/http/testing";
// import { RouterTestingModule } from "@angular/router/testing";

// describe("Service: Mobile", () => {
//   const fireBaseUrl = "https://ng-compare-mobiles.firebaseio.com/";

//   const AngularFirestoreStub = {
//     collection: someString => {}
//   };

//   let httpClientSpy: { get: jasmine.Spy };
// let mobileService: MobileService;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterTestingModule],
//       providers: [
//         MobileService,
//         { provide: AngularFirestore, useValue: AngularFirestoreStub }
//       ]
//     });
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     mobileService = new MobileService(<any> httpClientSpy);
//   });

//   it("should be created", inject([MobileService], (service: MobileService) => {
//     expect(service).toBeTruthy();
//   }));

// });
