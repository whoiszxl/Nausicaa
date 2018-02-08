import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSidenavModule } from '@angular/material';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from 'app/login/login.module';
import { ProjectRoutingModule } from 'app/project/project-routing.module';
import { ProjectModule } from 'app/project/project.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdSidenavModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    ProjectRoutingModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
