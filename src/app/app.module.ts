import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";
import { MatButtonModule,MatToolbarModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';


import 'hammerjs';

import { LoginService } from './services/login.service';
import { AddJerseyService } from './services/add-jersey.service';
import { UploadImageService } from './services/upload-image.service';
import { GetJerseyListService } from './services/get-jersey-list.service';
import { GetJerseyService } from './services/get-jersey.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewJerseyComponent } from './components/add-new-jersey/add-new-jersey.component';
import { JerseyListComponent } from './components/jersey-list/jersey-list.component';
import { ViewJerseyComponent } from './components/view-jersey/view-jersey.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewJerseyComponent,
    JerseyListComponent,
    ViewJerseyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [
    LoginService,
    AddJerseyService,
    UploadImageService,
    GetJerseyListService,
    GetJerseyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
