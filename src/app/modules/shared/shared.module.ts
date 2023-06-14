import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';
import { TraditionalComponent } from 'src/app/pages/traditional/traditional.component';
import { CasualComponent } from 'src/app/pages/casual/casual.component';
import { UniformsComponent } from 'src/app/pages/uniforms/uniforms.component';
import { PantsComponent } from 'src/app/pages/pants/pants.component';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';

import { PrimengModule } from '../primeng/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


const modules = [ 
  AppHeaderComponent,
  HomePageComponent,
  TraditionalComponent,
  CasualComponent,
  UniformsComponent,
  PantsComponent,
  AboutUsComponent,
]


@NgModule({
  declarations: [
    AppHeaderComponent,
    HomePageComponent,
    TraditionalComponent,
    CasualComponent,
    UniformsComponent,
    PantsComponent,
    AboutUsComponent,
  
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports : [...modules]
})
export class SharedModule { }
