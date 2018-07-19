import {Component, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  sponsors: any;
  constructor(
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.sponsors = this.db.collection('sponsor').valueChanges();
  }
}
