import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './@components/about/about.module';
import { BlogModule } from './@components/blog/blog.module';
import { FooterModule } from './@components/footer/footer.module';
import { GalleryModule } from './@components/gallery/gallery.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { ProductModule } from './@components/product/product.module';
import { ReviewModule } from './@components/review/review.module';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './@components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
    
  ],
  imports: [
    BrowserModule,
    /*AppRoutingModule,*/
    NavbarModule,
    AboutModule,
    ProductModule,
    GalleryModule,
    ReviewModule,
    BlogModule,
    FooterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
