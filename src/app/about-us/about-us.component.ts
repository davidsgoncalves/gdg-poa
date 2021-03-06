import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styles: []
})
export class AboutUsComponent implements OnInit {

  organizers: any;

  constructor(
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.organizers = this.db.collection('organizer').valueChanges();
  }

}
