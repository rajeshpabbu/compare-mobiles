import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MobilesComponent } from "./mobiles/mobiles.component";
import { MobleEditComponent } from "./mobiles/moble-edit/moble-edit.component";
import { HeaderComponent } from "./header/header.component";
import { CompareMobilesComponent } from "./mobiles/compare-mobiles/compare-mobiles.component";
import { MobileService } from "./mobiles/mobile.service";
import { MobileDetailsComponent } from "./mobiles/mobile-details/mobile-details.component";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { LoginInterceptorService } from "./auth/login/login-interceptor.service";
import { HomeComponent } from "./home/home.component";
import { AlertComponent } from "./shared/alert/alert.component";
import { PlaceholderDirective } from "./shared/placeholder/placeholder.directive";
import { BrandsPipe, ShortNamePipe } from "./brands.pipe";
import { MobileComponent } from "./mobiles/mobile/mobile.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent,
    MobleEditComponent,
    HeaderComponent,
    CompareMobilesComponent,
    MobileDetailsComponent,
    AuthComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    AlertComponent,
    PlaceholderDirective,
    BrandsPipe,
    ShortNamePipe,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    MobileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptorService,
      multi: true
    },
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
