import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent {

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/items').valueChanges();
  }

}
