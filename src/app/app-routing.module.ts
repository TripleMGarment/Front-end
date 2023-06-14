import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CasualComponent } from './pages/casual/casual.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PantsComponent } from './pages/pants/pants.component';
import { TraditionalComponent } from './pages/traditional/traditional.component';
import { UniformsComponent } from './pages/uniforms/uniforms.component';

const routes: Routes = [
 {
  path: 'home',
  component: HomePageComponent
 },
 {
  path: 'traditional',
  component :TraditionalComponent
 },
 {
  path:'casual',
  component: CasualComponent
 },
 {
  path:'uniforms',
  component: UniformsComponent
 },
 {
  path:'pants',
  component: PantsComponent
 },
 {
  path:'aboutus',
  component: AboutUsComponent
 }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
