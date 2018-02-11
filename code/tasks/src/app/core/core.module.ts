import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { loadSvgResources } from '../utils/svg.util';
import { HttpModule } from "@angular/http";

import 'hammerjs';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ]
})
export class CoreModule {

  //使用SkipSelf,使用的时候默认不会在当前类里面寻找，不然构造函数的判断会一直卡死在当前类中
  //第一次加载不存在CoreModule，使用@Optional注解让其是可选的，如果有就判断，没有就直接构造
  constructor(@Optional() @SkipSelf() parent: CoreModule, mr: MdIconRegistry, ds: DomSanitizer){
    if(parent) {
      throw new Error('Core模块已经加载，不允许重复加载！')
    }
    loadSvgResources(mr, ds);
  }

}
