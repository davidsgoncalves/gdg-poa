import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login-test',
  template: `
      <div *ngIf="afAuth.user | async as user; else showLogin">
          <h1>Hello {{ user.displayName }}!</h1>
          <pre>{{user | json}}</pre>
          <button (click)="logout()">Logout</button>
      </div>
      <ng-template #showLogin>
          <p>Please login.</p>
          <button (click)="login()">Login with Google</button>
      </ng-template>
  `,
  styles: []
})
export class LoginTestComponent {
  
  constructor(public afAuth: AngularFireAuth) {
    // let user = this.afAuth.auth.currentUser;
    //
    // if (user !== null && user.getIdToken() === 'nosso id') {
    //   // go the admin
    // } else {
    //   // go the home
    // }
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
