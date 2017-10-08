import { UserComponent } from './component/user/user.component';

import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'user',      component: UserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [ProductService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
