import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const modules = [ 
  AppHeaderComponent,
  HomePageComponent,
]


@NgModule({
  declarations: [
    AppHeaderComponent,
    HomePageComponent,
  
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FontAwesomeModule
  ],
  exports : [...modules]
})
export class SharedModule { }
