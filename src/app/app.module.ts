import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { RoomComponent } from './components/room/room.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { BedComponent } from './components/bed/bed.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { StudentAddComponent } from './components/student-add/student-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    RoomComponent,
    NaviComponent,
    BedComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    StudentAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
