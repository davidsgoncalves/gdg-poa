import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { SpeakersComponent } from './speakers/speakers.component';


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
  { path: 'test',
    component: TestComponent
  },
  { path: 'test-login',
    component: LoginTestComponent
  },
  { path: 'palestrantes',
    component: SpeakersComponent
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
