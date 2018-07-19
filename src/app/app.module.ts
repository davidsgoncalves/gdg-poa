import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment.prod';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { MatToolbarModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';

import { AppRoutingModule } from './app.routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    AboutUsComponent,
    ScheduleComponent,
    ContactComponent,
    LoginTestComponent,
    SpeakersComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'gdg-poa' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' }
    ]),
    TransferHttpCacheModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFireStorage, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {
}
