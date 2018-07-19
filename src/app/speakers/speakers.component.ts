import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styles: []
})
export class SpeakersComponent implements OnInit {
  
  speakers: any;
  constructor(
    private db: AngularFirestore,
  ) { }
  
  ngOnInit() {
    this.speakers = this.db.collection('speaker').valueChanges();
  }
}
