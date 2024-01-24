import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SystemComponent} from "./system.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SystemRoutingModule} from "./system-routing.module";
import {StoreModule} from "@ngrx/store";
import {reducers} from "../auth/core/store/auth.reducers";
import {AuthService} from "../auth/core/services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SystemComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    SystemRoutingModule,
    StoreModule.forFeature('auth', reducers)
  ],
  providers: [
    AuthService
  ],
  exports: [
    HeaderComponent
  ]
})
export class SystemModule {}
