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

//   it('expects service to fetch data with proper sorting',
//   inject([HttpClientTestingModule, MobileService],
//     (httpMock: HttpClientTestingModule, service: MobileService) => {
//       // We call the service
//       service.getAllMobiles().subscribe(data => {
//         expect(data.pageInfo.totalRecordCount).toBe(21);
//         expect(data.pageInfo.pageNumber).toBe(0);
//         expect(data.data.length).toBe(7);
//       });
//       // We set the expectations for the HttpClient mock
//       const req = httpMock.expectOne(fireBaseUrl + "mobiles.json");
//       expect(req.request.method).toEqual('GET');
//       // Then we set the fake data to be returned by the mock
//       req.flush({data: ...});
//     })
// );
// });
