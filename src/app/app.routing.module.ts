import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'quem-somos',
    component: AboutUsComponent
  },
  { path: 'agenda',
    component: ScheduleComponent
  },
  { path: 'contato',
    component: ContactComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'HomeComponent' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
